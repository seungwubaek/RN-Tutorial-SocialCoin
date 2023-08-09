import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Types
import { Coin } from './coinPaprika';

export type InNavStackParamList = {
  Home: undefined;
  Coins: undefined;
  CoinDetail: { coin: Coin };
};

export type OutNavStackParamList = {
  Login: undefined;
  Join: undefined;
};

export type InNavStackScreenProps<T extends keyof InNavStackParamList> =
  NativeStackScreenProps<InNavStackParamList, T>;

export type InNavStackNavigationProp<T extends keyof InNavStackParamList> =
  InNavStackScreenProps<T>['navigation'];

export type OutNavStackScreenProps<T extends keyof OutNavStackParamList> =
  NativeStackScreenProps<OutNavStackParamList, T>;
