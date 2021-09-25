import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Text,
  Box,
  Input,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from './Icons';
import {
  CONTAINER_SPACING,
  CONTAINER_SPACING_VERTICAL,
} from '../utils/constants';
import stats from '../../public/stats.json';

/**
 *
 *
 */
type RankingData = {
  tokenId: number;
};

/**
 *
 *
 */
export const RankingTable = () => {
  const [rankingData, changeRankingTokenId] = useState<RankingData>({
    tokenId: 712,
  });

  return (
    <Container m="0" w="full" maxW="full" p="0">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={CONTAINER_SPACING}
        py={CONTAINER_SPACING_VERTICAL}
      >
        <Heading as="h1" size="sm" fontWeight="600" color="white">
          Ranking Table
        </Heading>
        <Box as="div" position="relative">
          <Input
            pl="30px"
            borderRadius="32px"
            _placeholder={{ color: 'brand.300' }}
            fontSize="sm"
            border="0"
            color="white"
            background="brand.500"
            type="search"
            placeholder="Search DevDAO Id"
            onChange={(e) =>
              changeRankingTokenId({ tokenId: Number(e.target.value) })
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

      <Box as="div">
        <Table variant="rankingTable" size="md" maxH="5">
          <Thead>
            <Tr>
              <Th>DEV#</Th>
              <Th textAlign="right">
                <Text
                  as="span"
                  orientation="horizontal"
                  fontWeight="bold"
                  color="brand.700"
                >
                  RARITY
                </Text>
                <Text as="span" fontWeight="bold" color="brand.200">
                  &nbsp;/&nbsp;
                </Text>
                <Text as="span">RANKING</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {stats
              .filter(function (dev) {
                if (
                  rankingData.tokenId == 0 ||
                  (rankingData.tokenId > 0 &&
                    (dev.id + '').indexOf(rankingData.tokenId) > -1)
                )
                  return true;
                return false;
              })
              .map((dev, i) => {
                if (i > 10) return '';
                return (
                  <Tr key={dev.id}>
                    <Td>#{dev.id}</Td>
                    <Td textAlign="right">
                      <Text
                        as="span"
                        orientation="horizontal"
                        fontWeight="bold"
                        color="brand.700"
                      >
                        {(dev.rarityScore * 100).toFixed(2)}%
                      </Text>
                      / {dev.rarityRanking}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};
