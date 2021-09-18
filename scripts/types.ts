/**
 *
 */
export interface TokenType {
  id: number
  clothing: string
  industry: string
  language: string
  location: string
  mind: string
  os: string
  textEditor: string
  vibe: string
  tokenURI: string
  tokenURIParsed:
    | null
    | undefined
    | {
        name: string
        description: string
        image: string
      }
  rarity?: number
}

/**
 *
 */
export interface JSONDataType {
  contract?: string
  name?: string
  symbol?: string
  tokens?: TokenType[]
}

/**
 *
 */
export interface RankingType {
  id: number
  clothing: number
  clothingScore: number
  industry: number
  industryScore: number
  language: number
  languageScore: number
  location: number
  locationScore: number
  mind: number
  mindScore: number
  os: number
  osScore: number
  textEditor: number
  textEditorScore: number
  vibe: number
  vibeScore: number
  rarityRanking: number
  rarityScore: number
}
