import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Types
import { Coin } from './coinPaprika';

// Navigators

export type InNavTabParamList = {
  Home: undefined;
  InNavStack: undefined;
};

export type InNavStackParamList = {
  Coins: undefined;
  CoinDetail: { coin: Coin };
};

export type OutNavStackParamList = {
  Login: undefined;
  Join: undefined;
};

// Screens

export type InNavTabScreenProps<T extends keyof InNavTabParamList> =
  BottomTabScreenProps<InNavTabParamList, T>;

export type InNavStackScreenProps<T extends keyof InNavStackParamList> =
  NativeStackScreenProps<InNavStackParamList, T>;

export type InNavStackNavigationProp<T extends keyof InNavStackParamList> =
  InNavStackScreenProps<T>['navigation'];

export type OutNavStackScreenProps<T extends keyof OutNavStackParamList> =
  NativeStackScreenProps<OutNavStackParamList, T>;
