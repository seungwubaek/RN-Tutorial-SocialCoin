import type { TextInput } from 'react-native';
import styled from 'styled-components/native';

import { StTextBase, StViewContainerBase } from '~/styles/base';

export const StViewContainer = styled(StViewContainerBase)``;

export const StViewJoinForm = styled.View`
  gap: 10px;
`;

export const StTextInputJoinForm = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.darkTextInputPlaceholderTextColor,
}))`
  background-color: ${({ theme }) => theme.darkTextInputBgColor};
  color: ${({ theme }) => theme.textColor};
  padding: 5px 20px;
  font-size: 16px;
  height: 45px;
  border-radius: 45px;
` as typeof TextInput;

export const StBtnJoin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  padding: 5px 10px;
  font-size: 16px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 45px;
  justify-content: center;
  align-items: center;
`;

export const StBtnJoinText = styled(StTextBase)``;
