import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    mode: string;
    navHeaderBgColor: string;
    navHeaderTextColor: string;
    navHeaderTintColor: string;
    bgColor: string;
    darkTextInputBgColor: string;
    darkTextInputPlaceholderTextColor: string;
    textColor: string;
    borderColor: string;
    cryptoCardBgColor: string;
  }
}
