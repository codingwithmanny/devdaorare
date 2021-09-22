// Please take note of etherscan's API limit
// https://docs.etherscan.io/support/rate-limits (Currently 5 calls/second, up to 100,000 calls/day)
// Code inspired by: https://github.com/Anish-Agnihotri/dhof-loot

// Imports
// ========================================================
import { config } from 'dotenv';
import fs from 'fs';
import { ethers } from 'ethers';
import { abi } from '../src/contract/Dev.json';
import shell from 'shelljs';
import readline from 'readline';

// Types
// ========================================================
import { JSONDataType, TokenType } from './types';

// Config
// ========================================================
config({ path: './scripts/.env' });

// Constants
// ========================================================
const MIN_ID = 1;
const MAX_ID = 8000;
const API_COUNT_FILE = './scripts/.apicount';
const LAST_ID_PULLED = './scripts/.lastid';
const DATA_JSON_FILE = './scripts/data.json';
const CONTRACT_ADDRESS =
  process.env.CONTRACT_ADDRESS || 'UNKNOWN_CONTRACT_ADDRESS';
const API_KEY = process.env.ETHERSCAN_API_KEY || 'UNKNOWN_API_KEY';
const INTERVAL = 1000; // 1 second
const NETWORK_NAME = process.env.NETWORK_NAME || 'mainnet';
const THRESHOLD_PROMPT = 60; // 1 minutes
const READLINE = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const FAILURE_COUNT_THRESHOLD = 3;

let JSON_DATA: JSONDataType = {
  contract: CONTRACT_ADDRESS,
  tokens: [],
};
let API_REQUESTS_PERFORMED: number;
let FROM = 0;
let TO = 0;
let TIME_START = 0;
let TIME_END = 0;
let FORCE_START = false;
let FAILURE_COUNT = 0;
let FORCE_REPEAT = false;

// Helpers
// ========================================================
/**
 *
 * @param {*} time
 * @returns
 */
const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });

/**
 *
 * @param {*} token
 * @returns
 */
const parseJwt = (token: string) => {
  const base64 = token.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    Buffer.from(base64, 'base64')
      .toString()
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};

/**
 *
 * @param value
 * @param color
 * @returns
 */
const formatText = (
  value: string,
  color: 'red' | 'yellow' | 'green' | undefined,
) => {
  if (color === 'red') {
    return `\x1b[31m${value}\x1b[0m`;
  } else if (color === 'yellow') {
    return `\x1b[33m${value}\x1b[0m`;
  } else if (color === 'green') {
    return `\x1b[32m${value}\x1b[0m`;
  }
  return value;
};

/**
 *
 * @param {*} time
 * @returns
 */
const parseTime = (time: number) => {
  if (time > 3600) {
    return `${parseFloat(`${time / 60 / 60}`).toFixed(
      2,
    )}h \x1b[33m(yes you read that right, HOURS!)\x1b[0m`;
  } else if (time > 60) {
    return `${parseFloat(`${time / 60}`).toFixed(2)}m`;
  }
  return `${time}s`;
};

// Validate Flags
// ========================================================
process.argv.map((flag: string) => {
  const flagFromValue = flag.split('=')[1];
  if (flag.startsWith('-from') && flagFromValue) {
    if (flagFromValue === 'lastid' && fs.existsSync(LAST_ID_PULLED)) {
      FROM = parseInt(fs.readFileSync(LAST_ID_PULLED).toString(), 0) + 1;
    } else {
      FROM = parseInt(flagFromValue, 0);
    }
  } else if (flag.startsWith('-to') && parseInt(flag.split('=')[1], 0) > 0) {
    TO = parseInt(flag.split('=')[1], 0);
  } else if (flag.startsWith('-y')) {
    FORCE_START = true;
  } else if (flag.startsWith('-r')) {
    FORCE_REPEAT = true;
  }
  return flag;
});

if (FROM > TO || FROM < MIN_ID || TO > MAX_ID) {
  console.log(formatText(`Error! Range -from and -to are off.`, 'red'));
  process.exit(0);
}

// Load Existing JSON Data
// ========================================================
if (fs.existsSync(DATA_JSON_FILE)) {
  JSON_DATA = JSON.parse(fs.readFileSync(DATA_JSON_FILE).toString());
}

// Get API Count
// ========================================================
// Check if file exist, otherwise create it;
if (!fs.existsSync(API_COUNT_FILE)) {
  fs.writeFileSync(API_COUNT_FILE, '0');
}

// Parse Count
API_REQUESTS_PERFORMED = parseInt(
  fs.readFileSync(API_COUNT_FILE).toString() || '0',
  0,
);

if (FORCE_REPEAT) {
  console.log(formatText('REPEAT ENABLED', 'yellow'));
}

// Init
// ========================================================
/**
 *
 */
const init = async () => {
  console.log(formatText('Warning! This may take a while...', 'yellow'));
  console.log('-');
  console.log(`Fetching tokens:`);
  console.log(`FROM: ${FROM}`, `TO: ${TO}`);
  console.log(`TOTAL: ${TO + 1 - FROM}`);
  console.log('-');
  console.log(
    `Estimated time to fetch ${TO + 1 - FROM} entries: ~${parseTime(
      (TO + 1 - FROM) * 9,
    )}`,
  );
  console.log(`Estimated number of queries to perform: ${9 * (TO + 1 - FROM)}`);
  console.log(`Total API requests performed so far: ${API_REQUESTS_PERFORMED}`);

  if ((TO + 1 - FROM) * 9 > THRESHOLD_PROMPT && !FORCE_START) {
    await new Promise((resolve) => {
      console.log('-');
      READLINE.question(
        formatText(`Are you sure you want to continue? [y/n] `, 'yellow'),
        (response: string) => {
          if (response !== 'y') {
            process.exit(0);
          }
          resolve(true);
        },
      );
    });
  }

  TIME_START = new Date().getTime();
  console.log('-');
  console.log(`Started at: ${new Date(TIME_START).toLocaleTimeString()}`);

  const JSON_TOKEN_DATA: TokenType[] = [];
  const NETWORK = ethers.providers.getNetwork(NETWORK_NAME);
  const PROVIDER = new ethers.providers.EtherscanProvider(NETWORK, API_KEY);
  const CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, abi, PROVIDER);

  try {
    JSON_DATA.name = await CONTRACT.name();
    JSON_DATA.symbol = await CONTRACT.symbol();

    await delay(INTERVAL);
    API_REQUESTS_PERFORMED += 4;

    for (let i = FROM; i <= TO; i++) {
      // Note: these are separated to make sure the 5call/second isn't exhausted
      const clothing = await CONTRACT.getClothing(i); // 1
      const industry = await CONTRACT.getIndustry(i); // 2
      const language = await CONTRACT.getLanguage(i); // 3
      const location = await CONTRACT.getLocation(i); // 4
      const mind = await CONTRACT.getMind(i); // 5

      await delay(INTERVAL);

      const os = await CONTRACT.getOS(i); // 6
      const textEditor = await CONTRACT.getTextEditor(i); // 7
      const vibe = await CONTRACT.getVibe(i); // 8
      const tokenURI = await CONTRACT.tokenURI(i); // 9
      const tokenURIParsed = tokenURI
        ? parseJwt(tokenURI.replace('data:application/json;base64,', ''))
        : null;

      let INDEX = -1;
      const DATA = {
        id: i,
        clothing,
        industry,
        language,
        location,
        mind,
        os,
        textEditor,
        vibe,
        tokenURI,
        tokenURIParsed,
      };

      JSON_TOKEN_DATA.push(DATA);

      if (JSON_DATA.tokens.length > 0) {
        INDEX = JSON_DATA.tokens.findIndex((token) => token.id === i);
        if (INDEX > -1) {
          JSON_DATA.tokens[INDEX] = DATA;
        }
      }

      if (INDEX === -1) {
        JSON_DATA.tokens.push(DATA);
      }

      await delay(INTERVAL);

      API_REQUESTS_PERFORMED += 10;
    }
  } catch (error) {
    console.log(formatText('Error Occurred!', 'red'));
    console.log(error);
    FAILURE_COUNT++;
  }

  // @NOTE place the sort and write outside the try and catch
  // That way if one request fails it will write what was captured still
  // and not waste api calls

  // Sort
  if (JSON_DATA.tokens && JSON_DATA.tokens.length > 0) {
    JSON_DATA.tokens.sort((a, b) => a.id - b.id);
  }

  // Write file
  fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(JSON_DATA));

  // Output results
  console.log('-');
  console.log(
    formatText(`Successfully pulled ${JSON_TOKEN_DATA.length} items.`, 'green'),
  );
  console.log(`API requests performed today: ${API_REQUESTS_PERFORMED}`);
  console.log(
    formatText(
      `Take note that the free tier has a limit of 100,000 requests per day`,
      'yellow',
    ),
  );

  // Run prettier
  shell.exec(`./node_modules/.bin/prettier ${DATA_JSON_FILE} --write`);

  // Update .apicount requests file
  fs.writeFileSync(API_COUNT_FILE, `${API_REQUESTS_PERFORMED}`);

  // Update .last with the last id pulled
  FROM = JSON_DATA.tokens[JSON_DATA.tokens.length - 1].id;
  fs.writeFileSync(LAST_ID_PULLED, FROM.toString());

  if (
    FORCE_REPEAT &&
    FAILURE_COUNT - 1 < FAILURE_COUNT_THRESHOLD &&
    FROM < TO
  ) {
    console.log('-');
    console.log(formatText(`RETRYING`, 'yellow'));
    console.log(`Attempt: ${FAILURE_COUNT + 1}`);
    await delay(INTERVAL);
    init();
  } else {
    console.log('-');
    TIME_END = new Date().getTime();
    console.log(`Finished at: ${new Date(TIME_END).toLocaleTimeString()}`);
    console.log(`Total time: ${TIME_END - TIME_START}ms`);
    process.exit(0);
  }
};

/**
 *
 */
init();
