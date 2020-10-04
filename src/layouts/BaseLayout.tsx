import { Flex } from '@chakra-ui/core';
import React from 'react';

export interface BaseLayoutCompProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutCompProps> = ({ children }) => (
  <Flex px={4} pt={6} maxW="2xl" minH="100vh" mx="auto">
    {children}
  </Flex>
);

export default BaseLayout;
