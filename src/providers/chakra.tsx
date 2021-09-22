// Imports
// ========================================================
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

// Chakra Provider
// ========================================================
/**
 *
 * @param param0
 * @returns
 */
const ChakraProviderWrapper: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

// Exports
// ========================================================
export default ChakraProviderWrapper;
