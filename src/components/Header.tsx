import { Flex, IconButton, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon: 'sun' | 'moon' = colorMode === 'dark' ? 'sun' : 'moon';

  return (
    <Flex as="header" alignItems="center" justifyContent="space-between">
      <Text as="h1" fontSize={['lg']} fontWeight={['semibold']}>
        Hello
      </Text>
      <IconButton aria-label="Theme Toggle" icon={icon} onClick={toggleColorMode} />
    </Flex>
  );
};

export default Header;
