import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/core';
import React from 'react';

import { cities } from '../../modelsData/data';
import { TSetCity } from '../../modelsData/models';
import CityBtn from './CityBtn';

export interface SearchDrawerCompProps {
  changeCity: TSetCity;
  isOpen: boolean;
  onClose: () => void;
}

const SearchDrawer: React.FC<SearchDrawerCompProps> = ({ changeCity, isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose} placement="top" blockScrollOnMount={false}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader d="flex" justifyContent="space-between" alignItems="center">
        <Text color="#333333" fontWeight={['semibold']}>
          Choose City
        </Text>
        <DrawerCloseButton position="static" />
      </DrawerHeader>
      <DrawerBody>
        <Flex flexDirection="column" mb={8}>
          {cities.map(i => (
            <CityBtn name={i} handleClick={changeCity} key={i} />
          ))}
        </Flex>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default SearchDrawer;
