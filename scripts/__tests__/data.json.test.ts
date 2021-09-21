// Imports
// ========================================================
import JSON_DATA from '../data.json'
import { JSONDataType } from '../../scripts/types'

// Contants
// ========================================================
const TOTAL_TOKENS = 8000
const TOKEN_KEYS = Array.from(Array(TOTAL_TOKENS).keys()).map((i) => i + 1)

// Mocks
// ========================================================

// Tests
// ========================================================
describe('Testing json file to validate that all fields exists', () => {
  it('Should verify that all 8000 ids exists', () => {
    // Pre Expectations
    expect(JSON_DATA).not.toBeUndefined()
    expect(JSON_DATA.hasOwnProperty('tokens')).toBeTruthy()
    expect((JSON_DATA as JSONDataType).tokens.length).toBeGreaterThan(0)

    // Setup
    const tokensRetrieved: number[] = (JSON_DATA as JSONDataType).tokens.map(
      (i) => i.id,
    )
    const missing: number[] = []

    // Init
    for (let i = 0; i < TOKEN_KEYS.length; i++) {
      if (!tokensRetrieved.includes(TOKEN_KEYS[i])) {
        missing.push(TOKEN_KEYS[i])
      }
    }

    // Expectations
    expect(tokensRetrieved.length).toBe(TOTAL_TOKENS)
    expect(missing).toEqual([])
  })
})
