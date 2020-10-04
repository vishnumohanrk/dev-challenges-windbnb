import { Divider, PseudoBox } from '@chakra-ui/core';
import React from 'react';

import LabelBtn from './ShadowBoxLabels';

const ShadowBox: React.FC = () => (
  <PseudoBox
    d="flex"
    flexDirection="column"
    alignContent="flex-start"
    borderRadius="16px"
    bg="white"
    boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1);"
    py={3}
    my={5}
    _focus={{
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(66,153,225,0.6);',
    }}
  >
    <LabelBtn label="Name" value="Select City From the List" />
    <Divider />
    <LabelBtn label="Guests" value="Add Guests" />
  </PseudoBox>
);

export default ShadowBox;
