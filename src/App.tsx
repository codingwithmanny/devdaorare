// Imports
// ========================================================
import React, { useEffect, useState } from 'react';
// import { ethers, getDefaultProvider } from 'ethers';

import { SearchIcon } from './components/Icons';
// Contract
import {
  CONTAINER_SPACING,
  CONTAINER_SPACING_VERTICAL,
  // CONTRACT_ADDRESS,
} from './utils/constants';
// import DevContract from './contract/Dev.json';
import NavComponent from './components/Nav';
import FooterComponent from './components/Footer';
import { Container, Wrap, Text, WrapItem, Box, Flex } from '@chakra-ui/layout';
import { Input, Heading, Tag, TagLabel } from '@chakra-ui/react';
import { RankingTable } from './components/RankingTable';
import { DevDetails, TokenImage } from './components/DevDetails';

// Main Component
// ========================================================

type AppData = {
  tokenId: number;
};
/**
 *
 * @returns
 */
const App = () => {
  // State / Props
  const [tokenData, changeTokenId] = useState<AppData>({ tokenId: 712 });

  // Functions
  /*const changeTokenId = (_tokenId: number) => {
    console.log("Token ID changed to "+_tokenId)
    tokenData = {
      tokenId: _tokenId
    }
  }*/

  // Hooks
  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('Ethereum enabled!');
        // Note: this will be throttled based on the user's personal browser so we will have to handle error handling
        //  ========= NOTICE =========
        //  Request-Rate Exceeded  (this message will not be repeated)
        //
        //  The default API keys for each service are provided as a highly-throttled,
        //  community resource for low-traffic projects and early prototyping.
        //
        //  While your application will continue to function, we highly recommended
        //  signing up for your own API keys to improve performance, increase your
        //  request rate/limit and enable other perks, such as metrics and advanced APIs.
        //
        //  For more details: https://docs.ethers.io/api-keys/
        //  ==========================
        // @TODO: uncomment this when it's ready
        //  const provider = getDefaultProvider('homestead');
        //  const contract = new ethers.Contract(CONTRACT_ADDRESS, DevContract.abi, provider);

        // try {
        //   const data = await contract.tokenURI(1);
        //   console.log({ data });
        // } catch (error) {
        //   console.log({ error });
        // }
      }
    };

    init();
  }, []);

  // Render
  return (
    <div className="App">
      <NavComponent />
      <Box as="main" bg="white">
        <Container maxW="full" px="0px">
          <Wrap spacing="0px">
            <WrapItem
              w={{ base: '100%', md: '50%', xl: '33.33%' }}
              borderRight={{ base: 'none', md: '1px' }}
              borderBottom={{ base: '1px', md: 'none' }}
              color="brand.100"
            >
              <Container
                px={CONTAINER_SPACING}
                py={CONTAINER_SPACING_VERTICAL}
                m="0"
                w="full"
                maxW="full"
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  mb={CONTAINER_SPACING}
                >
                  <Heading as="h1" size="sm" fontWeight="600" color="brand.600">
                    DevDAO ID
                  </Heading>
                  <Box as="div" position="relative">
                    <Input
                      pl="30px"
                      borderRadius="32px"
                      borderWidth="1px"
                      _placeholder={{ color: 'brand.300' }}
                      fontSize="sm"
                      borderColor="brand.100"
                      color="red.500"
                      type="number"
                      min="1"
                      max="8000"
                      placeholder="Search DevDAO Id"
                      onChange={(e) =>
                        changeTokenId({
                          tokenId:
                            Number(e.target.value) >= 1 &&
                            Number(e.target.value) <= 8000
                              ? Number(e.target.value)
                              : 1,
                        })
                      }
                    />
                    <SearchIcon
                      h="11px"
                      w="11px"
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="14px"
                      my="auto"
                      opacity="0.6"
                    />
                  </Box>
                </Flex>
                <Box
                  bg="brand.600"
                  w="full"
                  p={CONTAINER_SPACING}
                  rounded="6px"
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mb={CONTAINER_SPACING}
                  >
                    <Heading as="h3" size="sm" fontWeight="600" color="white">
                      Developer
                    </Heading>

                    <Tag
                      as="div"
                      verticalAlign="middle"
                      fontFamily="bodyJB"
                      background="brand.500"
                      borderRadius="50px"
                      padding="10px 20px"
                    >
                      <TagLabel>
                        <Text as="span" fontSize="lg" color="brand.400">
                          #&nbsp;
                        </Text>
                        <Text
                          as="span"
                          fontSize="lg"
                          color="white"
                          fontWeight="bold"
                        >
                          {Number(tokenData.tokenId)}
                        </Text>
                      </TagLabel>
                    </Tag>
                  </Flex>
                  <Box as="div" bg="white" borderRadius="4px">
                    {TokenImage(tokenData.tokenId)}
                  </Box>
                </Box>
              </Container>
            </WrapItem>
            <WrapItem w={{ base: '100%', md: '50%', xl: '33.33%' }}>
              <Container
                px={CONTAINER_SPACING}
                py={CONTAINER_SPACING_VERTICAL}
                m="0"
                w="full"
                maxW="full"
              >
                <DevDetails tokenId={tokenData.tokenId} />
              </Container>
            </WrapItem>
            <WrapItem
              w={{ base: '100%', md: '100%', xl: '33.33%' }}
              bg="brand.600"
              direction="column"
              spacing="0px"
            >
              <RankingTable />
            </WrapItem>
          </Wrap>
        </Container>
      </Box>
      <FooterComponent />
    </div>
  );
};

// Exports
// ========================================================
export default App;
