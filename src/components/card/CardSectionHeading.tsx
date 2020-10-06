import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

import { TCityName } from '../../modelsData/models';

export interface CardsSectionHeadingCompProps {
  city: TCityName;
  staysCount: number;
}

const CardsSectionHeading: React.FC<CardsSectionHeadingCompProps> = ({ city, staysCount }) => (
  <Flex
    justify={{ base: 'space-between', sm: 'space-around', md: 'space-between' }}
    align="center"
    mb={6}
    w="100%"
  >
    <Text fontWeight={['bold']} fontSize={['xl']} color="black">
      Stays in {city}
    </Text>
    <Text fontWeight={['medium']} fontSize={['base']} color="#4F4F4F">
      {staysCount} stays
    </Text>
  </Flex>
);

export default CardsSectionHeading;
