import { Text } from '@chakra-ui/core';
import React from 'react';

export interface LabelBtnCompProps {
  label: string;
  value: string;
}

const LabelBtn: React.FC<LabelBtnCompProps> = ({ label, value }) => (
  <>
    <Text px={5} py="2px" fontWeight={['medium']}>
      {label}
    </Text>
    <Text px={5} py="2px" color="#BDBDBD">
      {value}
    </Text>
  </>
);

export default LabelBtn;
