import React, { useState } from 'react';

import CardSection from '../src/components/CardSection';
import Header from '../src/components/Header';
import BaseLayout from '../src/layouts/BaseLayout';
import { fullData } from '../src/modelsData/data';

const App: React.FC = () => {
  const [viewData] = useState(fullData);

  return (
    <BaseLayout>
      <Header />
      <CardSection data={viewData} />
    </BaseLayout>
  );
};

export default App;
