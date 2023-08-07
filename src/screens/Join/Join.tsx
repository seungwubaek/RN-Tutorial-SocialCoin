import React from 'react';
import { TextInput } from 'react-native';

// Styles
import { StBtnJoin, StBtnJoinText, StTextInputJoinForm, StViewContainer, StViewJoinForm } from './Join.style';

// Types
import { OutNavStackScreenProps } from '~/types/react-navigation';

const Join: React.FC<OutNavStackScreenProps<'Join'>> = ({}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const emailOnSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };
  const passwordInputRef = React.useRef<TextInput>(null);

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
      ></StTextInputJoinForm>
      <StBtnJoin onPress={() => {}}>
        <StBtnJoinText>Create Account</StBtnJoinText>
      </StBtnJoin>
      </StViewJoinForm>
    </StViewContainer>
  );
};

export default Join;
