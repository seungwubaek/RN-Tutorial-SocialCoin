import React from 'react';

// Styles
import {
  StBtnJoin,
  StBtnJoinText,
  StText,
  StViewContainer,
} from './Login.style';

// Types
import type { OutNavStackScreenProps } from '~/types/react-navigation';

const Login: React.FC<OutNavStackScreenProps<'Login'>> = ({
  navigation: { navigate },
}) => {
  return (
    <StViewContainer>
      <StText>
        Don't have an account?{' '}
        <StBtnJoin onPress={() => navigate('Join')}>
          <StBtnJoinText>Join</StBtnJoinText>
        </StBtnJoin>
      </StText>
    </StViewContainer>
  );
};

export default Login;
