import React from 'react';
import { Platform, ActivityIndicator, Alert, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

// Components
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

// Styles
import {
  StBtnJoin,
  StBtnLogin,
  StTextJoin,
  StTextAppSubTitle,
  StTextAppTitle,
  StTextInputLoginForm,
  StTextLogin,
  StViewAppTitleWrapper,
  StViewContainer,
  StViewJoinMsgContainer,
  StViewLoginFormContainer,
  StTextJoinMsgDoYouHave,
  StViewAppTitleContainer,
} from './Login.style';

// Types
import type { OutNavStackScreenProps } from '~/types/react-navigation';
import { useTheme } from 'styled-components/native';

const Login: React.FC<OutNavStackScreenProps<'Login'>> = ({
  navigation: { navigate },
}) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const passwordInputRef = React.useRef<TextInput>(null);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const emailOnSubmitEditing = React.useCallback(() => {
    passwordInputRef.current?.focus();
  }, [passwordInputRef]);

  const passwordOnSubmitEditing = React.useCallback(async () => {
    if (isLoggingIn) return;
    if (!email || !password) {
      Alert.alert('', 'Please enter your email and password.');
      return;
    }
    setIsLoggingIn(true);
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => console.log('User signed in'));
    } catch (e) {
      let errorMessage = '';
      // @ts-ignore
      switch (e.code) {
        case 'auth/invalid-email':
          errorMessage = 'That email address is invalid';
          break;
        case 'auth/user-disabled':
          errorMessage = 'That email address is disabled';
          break;
        case 'auth/user-not-found':
          errorMessage = 'That email address is not found';
          break;
        case 'auth/wrong-password':
          errorMessage = 'That account info is wrong';
          break;
      }
      Alert.alert('', errorMessage);
    } finally {
      setIsLoggingIn(false);
    }
  }, [isLoggingIn, email, password]);

  return (
    <StViewContainer>
      <StViewAppTitleContainer>
        <StViewAppTitleWrapper>
          <StTextAppTitle>Social Coin </StTextAppTitle>
          <FontAwesome5 name="coins" size={20} color={theme.textColor} />
        </StViewAppTitleWrapper>
        <StViewAppTitleWrapper>
          <StTextAppSubTitle>powered by CoinPaprika</StTextAppSubTitle>
        </StViewAppTitleWrapper>
      </StViewAppTitleContainer>

      <StViewLoginFormContainer>
        <StTextInputLoginForm
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={emailOnSubmitEditing}
        />
        <StTextInputLoginForm
          ref={passwordInputRef}
          placeholder="Password"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={passwordOnSubmitEditing}
        />
        <StBtnLogin onPress={passwordOnSubmitEditing}>
          {isLoggingIn ? (
            <ActivityIndicator color={theme.textColor} />
          ) : (
            <StTextLogin>Login</StTextLogin>
          )}
        </StBtnLogin>
        <StViewJoinMsgContainer>
          <StTextJoinMsgDoYouHave>
            Don't have an account?{'  '}
          </StTextJoinMsgDoYouHave>
          <StBtnJoin onPress={() => navigate('Join')}>
            <StTextJoin>
              Join{' '}
              {Platform.OS === 'ios' ? (
                <Ionicons name="ios-arrow-forward-outline" size={15} />
              ) : (
                <Ionicons name="arrow-forward-outline" size={15} />
              )}
            </StTextJoin>
          </StBtnJoin>
        </StViewJoinMsgContainer>
      </StViewLoginFormContainer>
    </StViewContainer>
  );
};

export default Login;
