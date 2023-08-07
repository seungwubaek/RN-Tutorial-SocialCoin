import React from 'react';

// Components
import { Ionicons } from '@expo/vector-icons';

// Styles
import {
  StBtnJoin,
  StText,
  StViewContainer,
  StViewJoinMsgContainer,
} from './Login.style';

// Types
import type { OutNavStackScreenProps } from '~/types/react-navigation';

const Login: React.FC<OutNavStackScreenProps<'Login'>> = ({
  navigation: { navigate },
}) => {
  return (
    <StViewContainer>
      <StViewJoinMsgContainer>
        <StText>Don't have an account? </StText>
        <StBtnJoin onPress={() => navigate('Join')}>
          <StText>
            Join <Ionicons name="arrow-forward-outline" size={15} />
          </StText>
        </StBtnJoin>
      </StViewJoinMsgContainer>
    </StViewContainer>
  );
};

export default Login;
