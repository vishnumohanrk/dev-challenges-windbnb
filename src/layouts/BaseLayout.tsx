import { Box, Flex } from '@chakra-ui/core';
import React from 'react';

export interface BaseLayoutCompProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutCompProps> = ({ children }) => (
  <Flex p={4} maxW="lg" minH="100vh" mx="auto">
    <Box as="main" w="100%">
      {children}
    </Box>
  </Flex>
);

export default BaseLayout;
