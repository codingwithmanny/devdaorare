// Imports
// ========================================================
import { extendTheme, theme as base } from '@chakra-ui/react';

// Configurations
// ========================================================
/**
 *
 */
const theme = extendTheme({
  fonts: {
    heading: `'IBM Plex Sans', ${base.fonts?.heading}`,
    body: `'IBM Plex Sans',  ${base.fonts?.body}`,
    bodyJB: `'JetBrains Mono',  ${base.fonts?.body}`,
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
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.700',
      },
    },
    Button: {
      baseStyle: {
        borderRadius: '4px',
      },
      variants: {
        outlineWhite: {
          color: 'white',
          background: 'transparent',
          borderWidth: '1px',
          borderColor: 'white',
          _hover: {
            background: 'white',
            color: 'brand.700',
          },
        },

        dark: {
          color: 'white',
          background: 'brand.600',
          borderWidth: '1px',
          borderColor: 'white',
          _hover: {
            background: 'brand.700',
            color: 'white',
          },
        },
      },
    },
    Table: {
      variants: {
        rankingTable: {
          background: 'transparent',
          th: {
            background: 'brand.500',
            borderTopColor: 'brand.400',
            borderTopWidth: '1px',
          },
          tr: {
            _even: {
              color: 'white',
              background: 'brand.500',
            },
            _odd: {
              color: 'white',
            },
          },
        },
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        color: 'brand.400',
      },
    }),
  },
});

// Exports
// ========================================================
export default theme;
