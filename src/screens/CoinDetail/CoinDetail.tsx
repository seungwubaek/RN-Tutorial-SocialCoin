import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  VictoryTheme,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';

// Styled Components
import { StImgHeader, StViewContainer } from './CoinDetail.style';

// Apis
import { useQuery } from '@tanstack/react-query';
import { getCoinHistory, getCoinInfo } from '~/apis/coinPaprika';

// Types
import { InNavStackScreenProps } from '~/types/react-navigation';

const CoinDetail: React.FC<InNavStackScreenProps<'CoinDetail'>> = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const { isLoading: isLoadingInfo, data: dataInfo } = useQuery(
    ['coinInfo', params.coin.id],
    getCoinInfo
  );
  const { isLoading: isLoadingHistory, data: dataHistory } = useQuery(
    ['coinHistory', params.coin.id],
    getCoinHistory
  );
  const [victoryData, setVictoryData] = React.useState<
    { x: string; y: number }[]
  >([]);

  React.useEffect(() => {
    if (dataHistory) {
      setVictoryData(
        dataHistory.map((coinTick) => {
          const xTime = new Date(coinTick.timestamp);
          const year = xTime.getFullYear().toString().slice(2, 4);
          const month = xTime.getMonth().toString().padStart(2, '0');
          const day = xTime.getDate().toString().padStart(2, '0');
          const hour = xTime.getHours().toString().padStart(2, '0');
          const minute = xTime.getMinutes().toString().padStart(2, '0');
          const x = `${year}-${month}-${day} ${hour}:${minute}`;
          return {
            x,
            y: coinTick.price,
          };
        })
      );
    }
  }, [dataHistory]);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <StImgHeader
          source={{
            uri: `https://coinicons-api.vercel.app/api/icon/${params.coin.symbol.toLowerCase()}`,
          }}
        />
      ),
    });
  }, []);

  return (
    <StViewContainer>
      {victoryData.length > 0 ? (
        <VictoryChart
          height={400}
          theme={VictoryTheme.material}
          padding={{ top: 25, bottom: 100, left: 50, right: 65 }}
        >
          <VictoryAxis
            tickLabelComponent={
              <VictoryLabel
                style={{
                  fill: '#fff',
                  fontSize: 10,
                  textAnchor: 'start',
                  angle: 75,
                }}
              />
            }
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fill: '#fff', fontSize: 10 },
            }}
          />
          <VictoryLine
            data={victoryData}
            interpolation={'linear'}
            style={{
              data: { stroke: '#1abc9c' },
            }}
            animate={{
              onLoad: { duration: 250 },
            }}
          />
          <VictoryScatter
            data={victoryData}
            size={5}
            style={{ data: { fill: '#20e0ba' } }}
          />
        </VictoryChart>
      ) : (
        <ActivityIndicator
          size={'large'}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
      )}
    </StViewContainer>
  );
};

export default CoinDetail;
