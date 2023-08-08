import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { StTextBase } from '~/styles/base';

export const StBtnCoin = styled.TouchableOpacity`
  flex: 1;
`;

const StViewCoin = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.cryptoCardBgColor};
  border-radius: 10px;
  padding: 20px 0;
`;

export const AniStViewCoin = Animated.createAnimatedComponent(StViewCoin);

export const StImgCoin = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 5px;
`;

export const StTextCoinSymbol = styled(StTextBase)`
  text-align: center;
`;
