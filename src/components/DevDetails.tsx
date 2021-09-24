import React from 'react';
import { Text, Heading, Box, Flex } from '@chakra-ui/layout';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { CONTAINER_SPACING, DEV_TOKEN_TRAITS } from '../utils/constants';
import { RankingType } from '../../scripts/types.js';
import IconOpenSea from './Icons/opensea';
import IconEtherscan from './Icons/etherscan';
import stats from '../../public/stats.json';

/**
 *
 *
 */
interface DevDetailsProps {
  tokenId: number;
}

/**
 *
 *
 */
export const DevDetails = (props: DevDetailsProps) => {
  return (
    <Box as="div">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={CONTAINER_SPACING}
      >
        <Heading as="h1" size="sm" fontWeight="600" color="brand.600">
          Details
        </Heading>
        <Box as="div" verticalAlign="middle">
          <Text as="span" fontSize="xl" color="brand.800">
            #&nbsp;
          </Text>
          <Text as="span" fontSize="xl" color="brand.700" fontWeight="bold">
            {Number(props.tokenId)}
          </Text>
        </Box>
      </Flex>
      {showTokenStatus(props.tokenId)}
      {showTraits(props.tokenId)}
      {tokenButtons()}
    </Box>
  );
};

/**
 *
 *
 */
const tokenButtons = () => {
  /**
   *
   * @param event
   */
  const onClickDetails = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // @TODO: Add modal interaction
    event.preventDefault();

    console.log(event.target);
  };

  return (
    <ButtonGroup
      d="flex"
      flex="1"
      flexWrap="wrap"
      variant="outline"
      size="full"
      isAttached={true}
      spacing="0"
      width="100"
    >
      <Button
        variant="dark"
        size="md"
        width="50%"
        onClick={(e) => onClickDetails(e)}
        leftIcon={<IconOpenSea width="24" height="24" />}
      >
        OpenSea
      </Button>
      <Button
        variant="dark"
        size="md"
        width="50%"
        onClick={(e) => onClickDetails(e)}
        leftIcon={<IconEtherscan width="24" height="24" />}
      >
        EtherScan
      </Button>
    </ButtonGroup>
  );
};

/**
 *
 *
 */
const showTraits = (tokenId: number) => {
  /**
   *
   * @param tokenId
   */
  /*console.log(Object.keys(DEV_TOKEN_TRAITS));
    const items = Object.keys(DEV_TOKEN_TRAITS).map((keyName: string, i: number) => (
        'a'
    ))*/

  const token = stats.filter(function (token: RankingType) {
    return token.id === tokenId;
  });

  return (
    <div>
      {Object.keys(DEV_TOKEN_TRAITS).map((trait) => (
        <Box as="div" key={trait}>
          <Flex justifyContent="space-between" paddingBottom="5">
            <Text
              as="span"
              casing="uppercase"
              color="brand.400"
              fontWeight="500"
            >
              {DEV_TOKEN_TRAITS[trait]}
            </Text>
            <Box
              as="div"
              position="relative"
              bottom="-2"
              flexGrow="1"
              borderY="50px"
              borderTop="dotted"
              borderTopWidth="3px"
              marginLeft="2"
              marginRight="2"
              borderTopColor="brand.100"
            ></Box>
            <Box as="div" fontFamily="bodyJB" fontWeight="bold">
              <Text as="span" color="black">
                PURPLE DRESS
              </Text>
              <Text as="span" fontWeight="bold" color="brand.200">
                /
              </Text>
              <Text as="span" casing="uppercase" color="brand.700">
                {token[0][trait] ? token[0][trait] : '0'}%
              </Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </div>
  );
};
