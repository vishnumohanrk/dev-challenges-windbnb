import { Flex } from '@chakra-ui/core';
import React from 'react';

import { IStayData, TCityName } from '../../modelsData/models';
import CardItem from './CardItem';
import CardsSectionHeading from './CardSectionHeading';

export interface CardSectionCompProps {
  data: IStayData[];
  city: TCityName;
}

const CardSection: React.FC<CardSectionCompProps> = ({ data, city }) => (
  <Flex
    as="section"
    flexDirection={{ base: 'column', md: 'row' }}
    justifyContent={{ md: 'space-between' }}
    flexWrap={{ md: 'wrap' }}
  >
    <CardsSectionHeading city={city} />
    {data.map(i => (
      <CardItem key={i.title} {...i} />
    ))}
  </Flex>
);

export default CardSection;
