# Dev DAO Rare

Website dedicated to showing the rarity of https://developerdao.com minted NFTs.
The website shows the rarity based on how often keywords are used and weights
each keyword to give an average rarity value (lowest number being the most
rare).

## Requirements

- NVM or NodeJS `v14.17.6`
- Yarn `v1.22.0`

## Local Development

1. Install the correct version of NodeJS

```bash
nvm install;
```

2. Install dependencies

```bash
yarn install;
```

3. Start local development

```bash
yarn dev;
```

## Building

1. Build files

```bash
yarn build;
```

2. (Optional) Test build

```bash
npx http-server dist;
# Available on:
#   http://127.0.0.1:8080
```

## Runnig Rarity Scripts

## Pull Data Script

**Note:** (For now), you will need a ETHERSCAN_API_KEY set in `scripts/.env`

### Script Commands:

- `-from` - id to start retrieving from - Expects an `integer` or the value of
  `lastid`
- `-to` - id to end retrieving to - Expects an `integer`
- `-y` - answers prompt if they want to continue regardless of how much it will
  take
- `-r` - enables repeat on failure up to 3 times

### Examples on how to run:

```bash
yarn pull -from=lastid -to=8000;
```

```bash
yarn pull -from=200 -to=300 -y;
```

```bash
yarn pull -from=lastid -to=7000 -y -r;
```

### Last Id & API Count

The script will create two files when executing the script:

- `scripts/.apicount` which keeps track of how many API requests have been made
- `scripts/.lastid` which is the last id that was retrieve so that this value
  can be used for `-from=lastid`

## Stats Data Script

The _stats.ts_ file is in charge of generating the appropriate rarity ranking.

### Script Commands:

- `-weights` - Shows the weights used for each trait - `void`
- `-id` - id to retrieve rarity stats - Expects an `integer` between `1` and
  `TOTAL_TOKENS`
- `-results` - number of results to show - Expects an `integer` between `1` and
  `TOTAL_TOKENS` . By de fault is `50`-
- `-generate` - outputs the `JSON_DATA_RANKING` result to `DATA_STATS_FILE` -
  `void`

You can easily run using:

```bash
yarn stats;
```

## GitHub Page Generation

Generates deployed data to the `/docs` folder for GitHub Pages.

```bash
yarn pages;
```
