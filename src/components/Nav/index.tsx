// Imports
// ========================================================
import React from 'react'
import { Link, Container, Flex, Spacer } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { CONTAINER_SPACING } from '../../utils/constants'
import { LogoIcon, GitHubIcon } from '../Icons'

// Component
// ========================================================
/**
 *
 * @returns
 */
const NavComponent = () => {
  return (
    <nav>
      <Container
        maxW="full"
        px={CONTAINER_SPACING}
        height="60px"
        bg="brand.600"
      >
        <Flex alignItems="center" height="60px">
          <Link
            href="/"
            title="Developer DAO Rare"
            color="brand.400"
            fontWeight="600"
            display="flex"
            _hover={{ textDecoration: 'none' }}
          >
            <LogoIcon mr="5px" w="24px" />
            DevDao
            <Box as="span" color="white">
              Rare
            </Box>
          </Link>
          <Spacer />
          <Link
            title="GitHub Repository"
            href="https://github.com/codingwithmanny/devdaorare"
            target="_blank"
          >
            <GitHubIcon h="21px" w="21px" />
          </Link>
        </Flex>
      </Container>
    </nav>
  )
}

// Exports
// ========================================================
export default NavComponent
