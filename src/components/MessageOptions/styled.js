import React from 'react';
import styled from 'styled-components'
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const Wrapper = styled((props) => <ButtonGroup {...props} />)`
  background-color: #FFFFFF;
  position: absolute;
  top: -15px;
  right: 10px;
`;
