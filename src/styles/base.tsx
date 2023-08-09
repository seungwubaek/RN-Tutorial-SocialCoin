import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const StViewContainerBase = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

export const StTextBase = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
`;

export const StTextInputFormBase = styled.TextInput.attrs(({ theme }) => {
  return {
    placeholderTextColor: theme.darkTextInputPlaceholderTextColor,
  };
})`
  background-color: ${({ theme }) => theme.darkTextInputBgColor};
  color: ${({ theme }) => theme.textColor};
  padding: 5px 20px;
  font-size: 16px;
  height: 45px;
  border-radius: 45px;
` as typeof TextInput;

export const StBtnAccountControl = styled.TouchableOpacity`
  padding: 5px 20px;
  width: 100%;
  height: 45px;
  font-size: 16px;
  border-radius: 45px;
  background-color: ${({ theme }) => theme.primaryColor};
  justify-content: center;
  align-items: center;
`;
