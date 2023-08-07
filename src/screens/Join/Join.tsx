import React from 'react';

// Styles
import { StText, StTextInput, StViewContainer } from './Join.style';
import { TextInput } from 'react-native';

// Styles

const Join = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const emailOnSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };
  const passwordInputRef = React.useRef<TextInput>(null);

  return (
    <StViewContainer>
      <StTextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={emailOnSubmitEditing}
      ></StTextInput>
      <StTextInput
        ref={passwordInputRef}
        placeholder="Password"
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={(text) => setPassword(text)}
      ></StTextInput>
    </StViewContainer>
  );
};

export default Join;
