import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Components
import { ActivityIndicator } from 'react-native';
import CoinItem from '~/components/molecules/CoinItem';

// Apis
import { getCoins } from '~/apis/coinPaprika';

// Styles
import { useTheme } from 'styled-components/native';
import {
  StViewContainer,
  StViewLoadingAPI,
  StFlatListCoins,
  StViewSepForFlatListCoins,
} from './Home.style';

// Types
import { Coin } from '~/types/coinPaprika';
import { InNavStackScreenProps } from '~/types/react-navigation';

const Home: React.FC<InNavStackScreenProps<'Home'>> = () => {
  const [cleanData, setCleanData] = React.useState<Coin[]>([]);
  const theme = useTheme();
  const { isLoading, data } = useQuery(['coins'], getCoins);

  console.log('Cleaned Data Length', cleanData?.length ?? 0);

  React.useEffect(() => {
    if (!data || data.length === 0) return;
    setCleanData(
      data?.filter(
        (coin) => coin.rank !== 0 && coin.is_active && !coin.is_new
      ) ?? []
    );
  }, [data]);

  if (isLoading) {
    return (
      <StViewLoadingAPI>
        <ActivityIndicator size="large" color={theme.textColor} />
      </StViewLoadingAPI>
    );
  }

  return (
    <StViewContainer>
      <StFlatListCoins
        numColumns={3}
        data={cleanData}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
        ItemSeparatorComponent={() => <StViewSepForFlatListCoins />}
        renderItem={({ item, index }) => <CoinItem item={item} index={index} />}
      />
    </StViewContainer>
  );
};

export default Home;
