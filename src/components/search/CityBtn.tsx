import { Box, Button, Text } from '@chakra-ui/core';
import React from 'react';

import { TCityName, TSetCity } from '../../modelsData/models';
import LocationIcon from '../icons/LocationIcon';

export interface CityBtnCompProps {
  handleClick: TSetCity;
  name: TCityName;
}

const CityBtn: React.FC<CityBtnCompProps> = ({ handleClick, name }) => (
  <Button
    d="flex"
    w="100%"
    justifyContent="flex-start"
    alignContent="center"
    variant="ghost"
    onClick={() => handleClick(name)}
    py={8}
  >
    <Box color="#4F4F4F" mr={2}>
      <LocationIcon />
    </Box>
    <Text color="#4F4F4F" fontSize={['lg']} fontWeight={['normal']}>
      {name}
    </Text>
  </Button>
);

export default CityBtn;
