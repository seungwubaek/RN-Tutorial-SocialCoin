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
