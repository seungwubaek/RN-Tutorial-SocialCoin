import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type InNavStackParamList = {
  Home: undefined;
};

export type OutNavStackParamList = {
  Login: undefined;
  Join: undefined;
};

export type OutNavStackScreenProps<T extends keyof OutNavStackParamList> =
  NativeStackScreenProps<OutNavStackParamList, T>;
