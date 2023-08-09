import styled from 'styled-components/native';

import {
  StBtnAccountControl,
  StTextBase,
  StTextInputFormBase,
  StViewContainerBase,
} from '~/styles/base';

export const StViewContainer = styled(StViewContainerBase)`
  justify-content: center;
`;

export const StViewAppTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const StViewAppTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StTextAppTitle = styled(StTextBase)`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const StTextAppSubTitle = styled(StTextBase)`
  font-size: 12px;
  text-align: center;
`;

export const StViewLoginFormContainer = styled.View``;

export const StTextInputLoginForm = styled(StTextInputFormBase)`
  margin-bottom: 20px;
`;

export const StBtnLogin = styled(StBtnAccountControl)``;

export const StTextLogin = styled(StTextBase)`
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
`;

export const StViewJoinMsgContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StTextJoinMsgDoYouHave = styled(StTextBase)``;

export const StTextJoin = styled(StTextBase)`
  color: ${({ theme }) => theme.buttonTextColor};
`;

export const StBtnJoin = styled.TouchableOpacity``;
