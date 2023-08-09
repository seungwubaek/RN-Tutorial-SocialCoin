import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { StViewContainerBase } from '~/styles/base';

export const StViewContainer = styled(StViewContainerBase)``;

export const StViewLoadingAPI = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const StFlatListCoins = styled.FlatList`` as typeof FlatList;

export const StViewSepForFlatListCoins = styled.View`
  height: 10px;
`;
