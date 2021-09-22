// Imports
// ========================================================
import fs from 'fs';

// Types
// ========================================================
import { JSONDataType, TokenType, RankingType } from './types';

// Constants
// ========================================================
const TOTAL_TOKENS = 8000;
const DATA_JSON_FILE = './scripts/data.json';
const DATA_STATS_FILE = './public/stats.json';
const KEYS = [
  'os',
  'textEditor',
  'clothing',
  'language',
  'industry',
  'location',
  'mind',
  'vibe',
];
const OCCURANCES: {
  [key: string]: {
    [key: string]: number;
  };
} = {};
const RANKING: {
  [key: string]: {
    [key: string]: number;
  };
} = {};
let JSON_DATA: JSONDataType = {
  tokens: [],
};
let JSON_DATA_RANKING: RankingType[] = [];
let RARITY_TOKEN_FROM_ID = 0;
let SHOW_WEIGHTS = false;
let GENERATE_PUBLIC_STATS_FILE = false;
let RESULTS_TO_SHOW = 50;

// Helpers
// ========================================================
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
 * @param key
 * @param arrayObj
 */
const findOccurances = (key: string, arrayObj: TokenType[]) => {
  const dictionary: { [key: string]: number } = {};
  for (let i = 0; i < arrayObj.length; i++) {
    if (!dictionary[arrayObj[i][key as keyof TokenType] as string]) {
      dictionary[arrayObj[i][key as keyof TokenType] as string] = 0;
    }
    dictionary[arrayObj[i][key as keyof TokenType] as string]++;
  }
  return dictionary;
};

const balanceWeights = (sortable: [string, number][]) => {
  /**
  /* This function will set the value for each trait equally
  /* depending on the total number of tokens including it
  /*/
  const balancedSortable: [string, number][] = [];

  let previousCount = 0,
    currentIndex = 0;

  sortable.forEach((i, k) => {
    if (previousCount === 0 || previousCount !== i[1]) currentIndex++;
    balancedSortable.push([i[0], currentIndex]);
    previousCount = i[1];
  });

  return balancedSortable;
};

/**
 *
 * @param key
 * @param obj
 * @returns
 */
const defineRanking = (key: string, obj: { [key: string]: number }) => {
  let sortable: [string, number][] = [];
  const resultObj: { [key: string]: number } = {};

  // Set values as an array
  for (const attr in obj) {
    sortable.push([attr, obj[attr]]);
  }

  // Sort them
  sortable.sort((a, b) => a[1] - b[1]);

  // Adjust for 0, adding 1
  sortable = balanceWeights(sortable);
  // Old function: sortable = sortable.map((i, k) => [i[0], k + 1]);

  // Set values for result
  sortable.forEach((i) => (resultObj[i[0]] = i[1]));

  return resultObj;
};

const checkValidToken = (tokenId: number): number => {
  if (tokenId >= 1 && tokenId <= TOTAL_TOKENS) {
    return Number(tokenId);
  } else {
    console.log(
      formatText(
        `Error! The token ID/results number must be an integer between 1 and  ${TOTAL_TOKENS}.`,
        'red',
      ),
    );
    process.exit(0);
  }
  return 0;
};
// Validate Flags
// ========================================================
process.argv.forEach((flag: string) => {
  const flagFromValue = flag.split('=')[1];
  if (flag.startsWith('-id') && flagFromValue) {
    /* Show a token ID */
    RARITY_TOKEN_FROM_ID = checkValidToken(Number(flagFromValue));
  }

  if (flag.startsWith('-results') && flagFromValue) {
    /* Show the first {RESULTS_TO_SHOW} tokens */
    RESULTS_TO_SHOW = checkValidToken(Number(flagFromValue));
  }

  if (flag.startsWith('-weights') && !flagFromValue) {
    /* Show the weights for each trait */
    SHOW_WEIGHTS = true;
  }

  if (flag.startsWith('-generate') && !flagFromValue) {
    /* Should the /public/stats.json file be generated? */
    GENERATE_PUBLIC_STATS_FILE = true;
  }
});

// Init
// ========================================================
const init = () => {
  // Double check if file exists
  if (!fs.existsSync(DATA_JSON_FILE)) {
    console.log(formatText('Error! data.json file not found.', 'red'));
    process.exit(0);
  }

  // Read data and validate
  JSON_DATA = JSON.parse(fs.readFileSync(DATA_JSON_FILE).toString());
  if (!JSON_DATA.tokens || JSON_DATA.tokens.length === 0) {
    console.log(formatText('Error! No tokens found.', 'red'));
    process.exit(0);
  }

  // Notify user of count
  if (JSON_DATA.tokens.length < TOTAL_TOKENS) {
    console.log(
      formatText(
        `Warning! these stats only cover ${JSON_DATA.tokens.length} of ${TOTAL_TOKENS}.`,
        'yellow',
      ),
    );
    console.log(
      formatText('Data may not be a fully accurate data set!', 'yellow'),
    );
  } else if (JSON_DATA.tokens.length > TOTAL_TOKENS) {
    console.log(
      formatText(
        `The data.json file should contain a maximum of ${TOTAL_TOKENS}!`,
        'yellow',
      ),
    );
  }

  // Find all occurances
  for (let i = 0; i < KEYS.length; i++) {
    OCCURANCES[KEYS[i]] = findOccurances(KEYS[i], JSON_DATA.tokens);
  }

  // Define ranking
  for (let i = 0; i < KEYS.length; i++) {
    RANKING[KEYS[i]] = defineRanking(KEYS[i], OCCURANCES[KEYS[i]]);
  }

  if (SHOW_WEIGHTS) {
    console.log(
      formatText(`These are the current weights used for each trait`, 'green'),
    );
    console.log(RANKING);
    process.exit(0);
  }

  // Set ranking
  JSON_DATA_RANKING = JSON_DATA.tokens
    .filter(function (dev) {
      if (
        GENERATE_PUBLIC_STATS_FILE ||
        RARITY_TOKEN_FROM_ID === 0 ||
        (RARITY_TOKEN_FROM_ID > 0 && dev.id === RARITY_TOKEN_FROM_ID)
      ) {
        return true;
      }
      return false;
    })
    .map((dev) => {
      const data = {
        os: RANKING.os[dev.os],
        textEditor: RANKING.textEditor[dev.textEditor],
        clothing: RANKING.clothing[dev.clothing],
        language: RANKING.language[dev.language],
        industry: RANKING.industry[dev.industry],
        location: RANKING.location[dev.location],
        mind: RANKING.mind[dev.mind],
        vibe: RANKING.vibe[dev.vibe],
      };

      const score = {
        osScore: RANKING.os[dev.os] / Object.keys(OCCURANCES.os).length,
        textEditorScore:
          RANKING.textEditor[dev.textEditor] /
          Object.keys(OCCURANCES.textEditor).length,
        clothingScore:
          RANKING.clothing[dev.clothing] /
          Object.keys(OCCURANCES.clothing).length,
        languageScore:
          RANKING.language[dev.language] /
          Object.keys(OCCURANCES.language).length,
        industryScore:
          RANKING.industry[dev.industry] /
          Object.keys(OCCURANCES.industry).length,
        locationScore:
          RANKING.location[dev.location] /
          Object.keys(OCCURANCES.location).length,
        mindScore: RANKING.mind[dev.mind] / Object.keys(OCCURANCES.mind).length,
        vibeScore: RANKING.vibe[dev.vibe] / Object.keys(OCCURANCES.vibe).length,
      };

      const rarityRanking = Object.values(data).reduce((a, b) => a + b);
      const rarityScore = Object.values(score).reduce((a, b) => a + b);
      const rarityToken = {
        id: dev.id,
        ...data,
        ...score,
        rarityRanking,
        rarityScoreSum: rarityScore,
        rarityScore: rarityScore / Object.keys(data).length,
      };

      return rarityToken;
    });

  if (GENERATE_PUBLIC_STATS_FILE) {
    const jsonContent = JSON.stringify(JSON_DATA_RANKING);
    fs.writeFileSync(DATA_STATS_FILE, jsonContent);

    /* Confirmation message */
    console.log(
      formatText(`The ${DATA_STATS_FILE} file was written!`, 'green'),
    );
    process.exit(0);
  }

  if (RARITY_TOKEN_FROM_ID > 0) {
    /***
    /* One token catching 
    /**/
    if (JSON_DATA_RANKING.length !== 1) {
      /* The JSON_DATA_RANKING must be length 1 */
      console.log(
        formatText(
          `The token ID ${RARITY_TOKEN_FROM_ID} was not found in the list!`,
          'red',
        ),
      );
    } else {
      /* If the token is found, show the rarity */
      console.log(
        formatText(
          `Here is the result for token ID ${RARITY_TOKEN_FROM_ID}`,
          'green',
        ),
      );
      console.log(JSON_DATA_RANKING[0]);
    }
  } else {
    /***
    /* Show the first {RESULTS_TO_SHOW} entries 
    /**/
    console.log(
      formatText(`Here you have the first ${RESULTS_TO_SHOW} results`, 'green'),
    );

    // Sort based on rarityRanking
    JSON_DATA_RANKING.sort((a, b) => a.rarityRanking - b.rarityRanking);

    // JSON Ranking
    for (let i = 0; i < RESULTS_TO_SHOW; i++) {
      console.log(`${i + 1}. ${JSON_DATA_RANKING[i].id}`);
    }
  }
};

/**
 *
 */
init();
