import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    mode: string;
    navHeaderBgColor: string;
    navHeaderTextColor: string;
    navHeaderTintColor: string;
    navTabBgColor: string;
    navTabLabelColor: string;
    navTabLabelInactiveColor: string;
    bgColor: string;
    primaryColor: string;
    darkTextInputBgColor: string;
    darkTextInputPlaceholderTextColor: string;
    textColor: string;
    buttonTextColor: string;
    borderColor: string;
    cryptoCardBgColor: string;
  }
}
