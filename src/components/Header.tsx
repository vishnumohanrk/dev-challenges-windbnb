import { Flex, Image } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => (
  <Flex mb={{ base: 5, md: 0 }} w={{ base: '40%', sm: '25%', lg: '18%', xl: '11%' }}>
    <Image src="/logoIMG.svg" w="100%" alt="logo" />
  </Flex>
);

export default Header;
