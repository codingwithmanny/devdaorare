// Imports
// ========================================================
import React from 'react'
import ChakraProviderWrapper from './chakra'

// Root Provider
// ========================================================
/**
 *
 * @param param0
 * @returns
 */
const RootProvider: React.FC = ({ children }) => {
  return (
    <div>
      <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
    </div>
  )
}

// Exports
// ========================================================
export default RootProvider
