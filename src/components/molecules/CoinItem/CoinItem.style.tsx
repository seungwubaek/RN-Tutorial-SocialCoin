import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { StTextBase } from '~/styles/base';

const StViewCoin = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.cryptoCardBgColor};
  border-radius: 10px;
  padding: 20px 0;
`;

export const AniStViewCoin = Animated.createAnimatedComponent(StViewCoin);

export const StTextCoinSymbol = styled(StTextBase)``;

export const StImgCoin = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 5px;
`;
