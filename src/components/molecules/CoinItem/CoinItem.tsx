import React from 'react';
import { Animated } from 'react-native';

// Styled Components
import { StImgCoin, StTextCoinSymbol, AniStViewCoin } from './CoinItem.style';

// Types
import { Coin } from '~/types/coinPaprika';

const CoinItem: React.FC<{ item: Coin; index: number }> = ({ item, index }) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
    }).start();
  }, []);

  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
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
  );
};

export default CoinItem;
