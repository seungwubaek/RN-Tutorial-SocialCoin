import styled from 'styled-components/native';

import {
  StScrollViewContainerBase,
  StTextBase,
  StTextLinkBase,
} from '~/styles/base';
import { StImgCoin } from '~/components/molecules/CoinItem/CoinItem.style';

export const StScrollViewContainer = styled(StScrollViewContainerBase)``;

export const StImgHeader = styled(StImgCoin)`
  margin: 0;
`;

export const StTextCoinTitle = styled(StTextBase)`
  font-size: 24px;
  text-align: center;
`;

export const StViewChartContainer = styled.View`
  min-height: 400px;
`;

export const StViewInfoContainer = styled.View``;

export const StViewInfoRow = styled.View`
  margin-bottom: 10px;
`;

export const StTextInfoLabel = styled(StTextBase)`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StTextInfoValue = styled(StTextBase)`
  font-size: 18px;
  margin-left: 20px;
`;

export const StBtnInfoLink = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const StTextInfoLink = styled(StTextLinkBase)`
  font-size: 18px;
  margin-left: 20px;
`;
