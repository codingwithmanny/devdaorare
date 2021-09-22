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
  sortable = sortable.map((i, k) => [i[0], k + 1]);

  // Set values for result
  sortable.forEach((i) => (resultObj[i[0]] = i[1]));

  return resultObj;
};

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

  // Set ranking
  JSON_DATA_RANKING = JSON_DATA.tokens.map((dev) => {
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

    return {
      id: dev.id,
      ...data,
      ...score,
      rarityRanking,
      rarityScore: rarityScore / Object.keys(data).length,
    };
  });

  // Sort based on rarityRanking
  JSON_DATA_RANKING.sort((a, b) => a.rarityRanking - b.rarityRanking);

  // JSON Ranking
  for (let i = 0; i < 27; i++) {
    console.log(`${i + 1}. ${JSON_DATA_RANKING[i].id}`);
  }
};

/**
 *
 */
init();
