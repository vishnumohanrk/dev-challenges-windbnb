import { Box, Flex } from '@chakra-ui/core';
import React from 'react';

export interface BaseLayoutCompProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutCompProps> = ({ children }) => (
  <Flex py={4} px={{ base: 4, xl: 0 }} maxW="1280px" minH="100vh" mx="auto">
    <Box as="main" w="100%">
      {children}
    </Box>
  </Flex>
);

export default BaseLayout;
