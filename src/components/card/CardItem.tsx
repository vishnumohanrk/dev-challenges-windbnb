import { Box, Flex, Image, Text } from '@chakra-ui/core';
import React from 'react';

import { IStayData } from '../../modelsData/models';
import StarIcon from '../icons/StarIcon';

const CardItem: React.FC<IStayData> = props => {
  const { beds, photo, rating, superHost, title, type } = props;

  return (
    <Flex flexDirection="column" mb={8}>
      <Image
        src={photo}
        alt={title}
        w="100%"
        h="16rem"
        objectFit="cover"
        borderRadius="24px"
        mb={3}
      />
      <Flex justify="space-between">
        <Flex align="center">
          {superHost && (
            <Box borderRadius="12px" borderWidth="1px" borderColor="#4F4F4F" px={2} py={1} mr={3}>
              <Text fontSize={['xs']} fontWeight={['bold']} color="#4F4F4F">
                SUPER HOST
              </Text>
            </Box>
          )}
          <Text letterSpacing={['wide']} fontSize={['sm']} fontWeight={['medium']} color="#828282">
            {type}
            {beds && `, ${beds} ${beds === 1 ? 'bed' : 'beds'}`}
          </Text>
        </Flex>
        <Flex align="center">
          <Box color="rgba(235, 87, 87, 0.72);" mr={1}>
            <StarIcon />
          </Box>
          <Text color="#4F4F4F">{rating}</Text>
        </Flex>
      </Flex>
      <Text fontSize={['sm']} fontWeight={['medium']} color="black" mt={1}>
        {title}
      </Text>
    </Flex>
  );
};

export default CardItem;
