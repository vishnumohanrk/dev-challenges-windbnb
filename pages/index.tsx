import { Box, useDisclosure } from '@chakra-ui/core';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import CardSection from '../src/components/card/CardSection';
import Header from '../src/components/Header';
import SearchBar from '../src/components/search/SearchBar';
import SearchDrawer from '../src/components/search/SearchDrawer';
import BaseLayout from '../src/layouts/BaseLayout';
import { fullData } from '../src/modelsData/data';
import { IStayData, TCityName, TSetCity } from '../src/modelsData/models';

const App: React.FC = () => {
  const { isOpen: isDrawerOpen, onClose: onDrawerClose, onOpen: onDrawerOpen } = useDisclosure();

  const [city, setCity] = useState<TCityName>('Helsinki, Finland');
  const [viewData, setViewData] = useState<IStayData[]>(fullData);

  const handleCitySelection: TSetCity = value => setCity(value);

  useEffect(() => {
    setViewData(fullData.filter(i => `${i.city}, ${i.country}` === city));
  }, [city]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Windbnb - DEV Challenges</title>
        <meta name="description" content="DEV Challenges.io - Windbnb - By Vishnumohan R K" />
      </Head>

      <BaseLayout>
        <Box
          as="header"
          d={{ base: 'block', md: 'flex' }}
          justifyContent="space-between"
          alignItems="center"
          mt={{ md: 3 }}
          mb={{ base: 8, md: 10 }}
        >
          <Header />
          <SearchBar city={city} openSearch={onDrawerOpen} />
        </Box>
        <SearchDrawer
          changeCity={handleCitySelection}
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
        />
        <CardSection city={city} data={viewData} staysCount={viewData.length} />
      </BaseLayout>
    </>
  );
};

export default App;
