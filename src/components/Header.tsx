import { Flex, Image } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => (
  <Flex as="header" mb={5} w="40%">
    <Image src="/logoIMG.png" w="100%" alt="logo" />
  </Flex>
);

export default Header;
