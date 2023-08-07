# Trouble Shoot

## How to use `ref` in Styled Component `styled.TextInput` ?

* Styled Component로 작성한 `styled.TextInput`을 React Native Plain Component `TextInput`으로 타입 캐스팅
  * 이렇게 하지 않으면 Styled Component v6.0.7 기준, `styled.TextInput`에서 property `ref`의 intellisense가 작동하지 않음. 그래도 실행시 작동은 함. 다만 보기 불편.
* `ref`를 생성할때 `useRef`의 제네릭으로 React Native Plain Component `TextInput` 타입 지정

```tsx
// Join.style.tsx

import React from 'react';
import type { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const StViewContainer = styled.View``;
export const StText = styled.Text``;
export const StTextInput = styled.TextInput`` as typeof TextInput;


// Join.tsx
const Join = () => {
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
```
