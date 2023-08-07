import React from 'react';
import { ActivityIndicator, Alert, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

// Styles
import { useTheme } from 'styled-components/native';
import {
  StBtnJoin,
  StBtnJoinText,
  StTextInputJoinForm,
  StViewContainer,
  StViewJoinForm,
} from './Join.style';

// Types
import { OutNavStackScreenProps } from '~/types/react-navigation';

const Join: React.FC<OutNavStackScreenProps<'Join'>> = ({}) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isJoining, setIsJoining] = React.useState(false);
  const passwordInputRef = React.useRef<TextInput>(null);

  const emailOnSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };
  const passwordOnSubmitEditing = async () => {
    if (isJoining) {
      return;
    }
    if (!email || !password) {
      Alert.alert('', 'Please enter your email and password.');
      return;
    }
    setIsJoining(true);
    try {
      const userCred = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (e) {
      let errorMessage = '';
      // @ts-ignore
      switch (e.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'That email address is already in use';
          break;
        case 'auth/invalid-email':
          errorMessage = 'That email address is invalid';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'That email/password is invalid';
          break;
        case 'auth/weak-password':
          errorMessage = 'That password is too weak';
          break;
      }
      Alert.alert('', errorMessage);
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <StViewContainer>
      <StViewJoinForm>
        <StTextInputJoinForm
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={emailOnSubmitEditing}
        ></StTextInputJoinForm>
        <StTextInputJoinForm
          ref={passwordInputRef}
          placeholder="Password"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={passwordOnSubmitEditing}
        ></StTextInputJoinForm>
        <StBtnJoin onPress={passwordOnSubmitEditing}>
          {isJoining ? (
            <ActivityIndicator color={theme.textColor} />
          ) : (
            <StBtnJoinText>Create Account</StBtnJoinText>
          )}
        </StBtnJoin>
      </StViewJoinForm>
    </StViewContainer>
  );
};

export default Join;
