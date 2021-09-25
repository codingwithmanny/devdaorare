// Imports
// ========================================================
import React from 'react';
import { Link, Container, Flex, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import {
  CONTAINER_SPACING,
  CONTAINER_SPACING_VERTICAL,
  DATA_FILE,
} from '../../utils/constants';
import { LogoIcon } from '../Icons';

// Component
// ========================================================
/**
 *
 * @returns
 */
const FooterComponent = () => {
  // State / Props

  // Functions
  /**
   *
   * @param event
   */
  const onClickHow = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // @TODO: Add modal interaction
    event.preventDefault();
  };

  /**
   *
   */
  const onClickDownload = () => {
    window.location.href = DATA_FILE;
  };

  // Render
  return (
    <footer>
      <Container
        bg="brand.700"
        maxW="full"
        px={CONTAINER_SPACING}
        py={CONTAINER_SPACING_VERTICAL}
        color="brand.800"
      >
        <Flex flexWrap="wrap">
          <Flex
            w={{ base: '100%', md: '50%' }}
            h="auto"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <LogoIcon variation="small" w="14px" h="14px" mr="5px" />
              <Box as="p" fontSize="xs" fontWeight="500">
                Project Created By{' '}
                <Link
                  color="white"
                  href="https://github.com/codingwithmanny"
                  isExternal
                >
                  @codingwithmanny
                </Link>
                ,{' '}
                <Link color="white" href="https://github.com/jsgm" isExternal>
                  @jsgm
                </Link>
                , &amp;{' '}
                <Link
                  href="https://github.com/with-heart"
                  color="white"
                  isExternal
                >
                  @with-heart
                </Link>
              </Box>
            </Flex>
            <Box
              my={{ base: '20px', md: '0px' }}
              as="p"
              fontSize="xs"
              fontWeight="500"
            >
              LICENSE: MIT
            </Box>
          </Flex>
          <Flex
            w={{ base: '100%', md: '50%' }}
            justifyContent="flex-end"
            alignItems={{ base: 'flex-start', md: 'flex-end' }}
            flexDirection="column"
          >
            <Link
              href="https://developerdao.com"
              target="_blank"
              fontSize="xs"
              mb="10px"
              _hover={{ color: 'white' }}
            >
              Developer DAO
            </Link>
            <Link
              onClick={onClickHow}
              fontSize="xs"
              mb="20px"
              _hover={{ color: 'white' }}
            >
              How is ranking calculated?
            </Link>
            <Button onClick={onClickDownload} variant="outlineWhite">
              Download Data
            </Button>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

// Exports
// ========================================================
export default FooterComponent;
