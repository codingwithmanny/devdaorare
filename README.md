# Dev DAO Rare

Website dedicated to showing the rarity of https://developerdao.com minted NFTs.
The website shows the rarity based on how often keywords are used and weights each keyword to give an average rarity value (lowest number being the most rare).

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

## Runnig Rarity Script

```bash
yarn stats;
```
