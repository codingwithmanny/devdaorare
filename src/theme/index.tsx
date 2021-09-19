// Imports
// ========================================================
import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react'

// Configurations
// ========================================================
/**
 *
 */
const theme = extendTheme({
  fonts: {
    heading: `'IBM Plex Sans', ${base.fonts?.heading}`,
    body: `'IBM Plex Sans',  ${base.fonts?.body}`,
    code: ``,
  },
  colors: {
    brand: {
      100: '#EFEFEF',
      200: '#DDDDDD',
      300: '#C2C2C2',
      400: '#838383',
      500: '#343434',
      600: '#121212',
      700: '#008DFF',
      800: '#A3D6FF',
    },
  },
  components: {},
  styles: {
    global: () => ({
      body: {
        color: 'brand.400',
      },
    }),
  },
})

// Exports
// ========================================================
export default theme
