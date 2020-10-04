import { Box } from '@chakra-ui/core';
import React from 'react';

import Header from '../src/components/Header';
import BaseLayout from '../src/layouts/BaseLayout';

const App: React.FC = () => {
  return (
    <BaseLayout>
      <Box as="main" w="100%">
        <Header />
      </Box>
    </BaseLayout>
  );
};

export default App;
