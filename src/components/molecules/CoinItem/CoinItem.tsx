import React from 'react';
import { Animated, TouchableOpacity, Pressable, Text } from 'react-native';

// Styled Components
import {
  StImgCoin,
  StTextCoinSymbol,
  AniStViewCoin,
  StBtnCoin,
} from './CoinItem.style';

// Types
import { Coin } from '~/types/coinPaprika';
import { useNavigation } from '@react-navigation/native';
import { InNavStackNavigationProp } from '~/types/react-navigation';

const CoinItem: React.FC<{ item: Coin; index: number }> = ({ item, index }) => {
  const navigation = useNavigation<InNavStackNavigationProp<'CoinDetail'>>();
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 20,
    }).start();
  }, []);

  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <StBtnCoin
      onPress={() => navigation.navigate('CoinDetail', { coin: item })}
    >
      <AniStViewCoin
        style={{
          opacity,
          transform: [{ scale }],
        }}
      >
        <StImgCoin
          source={{
            uri: `https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`,
          }}
        />
        <StTextCoinSymbol>{item.symbol}</StTextCoinSymbol>
      </AniStViewCoin>
    </StBtnCoin>
  );
};

export default CoinItem;
