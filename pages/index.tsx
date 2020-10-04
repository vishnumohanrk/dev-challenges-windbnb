import { useDisclosure } from '@chakra-ui/core';
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
    <BaseLayout>
      <Header />
      <SearchBar city={city} openSearch={onDrawerOpen} />
      <SearchDrawer
        changeCity={handleCitySelection}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      />
      <CardSection city={city} data={viewData} />
    </BaseLayout>
  );
};

export default App;
