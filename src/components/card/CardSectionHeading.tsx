import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

import { TCityName } from '../../modelsData/models';

const CardsSectionHeading: React.FC<{ city: TCityName }> = ({ city }) => (
  <Flex justify="space-between" align="center" mb={6}>
    <Text fontWeight={['bold']} fontSize={['xl']} color="black">
      Stays in {city}
    </Text>
    <Text fontWeight={['medium']} fontSize={['base']} color="#4F4F4F">
      12+ stays
    </Text>
  </Flex>
);

export default CardsSectionHeading;
