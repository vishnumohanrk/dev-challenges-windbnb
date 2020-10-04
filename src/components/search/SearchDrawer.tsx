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
import CityBtn from './CityBtn';
import ShadowBox from './ShadowBox';

export interface DrawerCompProps {
  isOpen: boolean;
  closeSearch: () => void;
}

const SearchDrawer: React.FC<DrawerCompProps> = ({ isOpen, closeSearch }) => {
  return (
    <Drawer placement="top" onClose={closeSearch} isOpen={isOpen} blockScrollOnMount={false}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Text fontSize={['lg']} fontWeight={['bold']}>
            Edit Your Search
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <ShadowBox />
          <Flex flexDirection="column">
            {cities.map(i => (
              <CityBtn name={i} handleClick={() => console.log()} key={i} />
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
