import { Flex } from '@chakra-ui/core';
import React from 'react';

import { IStayData } from '../modelsData/models';
import CardItem from './CardItem';
import CardsSectionHeading from './CardSectionHeading';

const CardSection: React.FC<{ data: IStayData[] }> = ({ data }) => (
  <Flex as="section" flexDirection={['column']}>
    <CardsSectionHeading />
    {data.map(i => (
      <CardItem key={i.title} {...i} />
    ))}
  </Flex>
);

export default CardSection;
