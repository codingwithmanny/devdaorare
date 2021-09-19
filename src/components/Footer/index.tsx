// Imports
// ========================================================
import React from 'react'
import { Link, Container, Flex, Spacer, Box } from '@chakra-ui/layout'
import {
  CONTAINER_SPACING,
  CONTAINER_SPACING_VERTIVAL,
} from '../../utils/constants'
import { LogoIcon } from '../Icons'

// Component
// ========================================================
/**
 *
 * @returns
 */
const FooterComponent = () => {
  return (
    <footer>
      <Container
        bg="brand.700"
        maxW="full"
        px={CONTAINER_SPACING}
        py={CONTAINER_SPACING_VERTIVAL}
        color="brand.800"
      >
        <Flex alignItems="center">
          <LogoIcon variation="small" w="14px" h="14px" mr="5px" />
          <Box as="p" fontSize="xs" fontWeight="500">
            Project created by <Link>@person</Link> &amp;{' '}
            <Link>@otherperson</Link>
          </Box>
        </Flex>
      </Container>
    </footer>
  )
}

// Exports
// ========================================================
export default FooterComponent
