import { Box, Divider, Flex, PseudoBox, Text } from '@chakra-ui/core';
import React from 'react';

import { TCityName } from '../../modelsData/models';
import SearchIcon from '../icons/SearchIcon';

const BtnDivider = () => (
  <Divider h="100%" m={0} orientation="vertical" borderWidth="3px" borderColor="#F2F2F2" />
);

const someStyles = { px: 5, py: 4 };

export interface SearchBarCompProps {
  openSearch: () => void;
  city: TCityName;
}

const SearchBar: React.FC<SearchBarCompProps> = ({ openSearch, city }) => (
  <Flex justify="center" mb={8}>
    <PseudoBox
      as="button"
      aria-label="Search"
      d="flex"
      alignItems="center"
      pr={1}
      borderRadius="16px"
      bg="white"
      boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1);"
      _focus={{
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(66,153,225,0.6);',
      }}
      onClick={openSearch}
    >
      <Text {...someStyles} color="black" fontWeight={['medium']}>
        {city}
      </Text>
      <BtnDivider />
      <Text {...someStyles} color="#BDBDBD">
        Add Guests
      </Text>
      <BtnDivider />
      <Box {...someStyles} color="rgba(235, 87, 87, 0.9);">
        <SearchIcon />
      </Box>
    </PseudoBox>
  </Flex>
);

export default SearchBar;
