import styled from 'styled-components/native';

// Styles
import {
  StViewContainerBase,
  StTextBase,
  StBtnAccountControl,
} from '~/styles/base';

export const StViewContainer = styled(StViewContainerBase)``;

export const StViewAccountFormContainer = styled.View`
  padding-vertical: 20px;
`;

export const StViewAccountFormRow = styled.View`
  margin-bottom: 20px;
`;

export const StTextAccountFormLabel = styled(StTextBase)`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const StTextAccountFormValue = styled(StTextBase)`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const StBtnLogout = styled(StBtnAccountControl)``;

export const StTextLogout = styled(StTextBase)`
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
`;
