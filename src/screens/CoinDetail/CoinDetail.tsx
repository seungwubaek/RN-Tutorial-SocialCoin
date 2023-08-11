import React from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {
  VictoryTheme,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';

// Styled Components
import {
  StBtnInfoLink,
  StImgHeader,
  StTextCoinTitle,
  StTextInfoLabel,
  StTextInfoLink,
  StTextInfoValue,
  StViewChartContainer,
  StScrollViewContainer,
  StViewInfoContainer,
  StViewInfoRow,
} from './CoinDetail.style';

// Apis
import { useQuery } from '@tanstack/react-query';
import { getCoinHistory, getCoinInfo } from '~/apis/coinPaprika';

// Types
import type { InNavStackScreenProps } from '~/types/react-navigation';
import type { CoinInfo } from '~/types/coinPaprika';

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
  const [coinInfoData, setCoinInfoData] = React.useState<CoinInfo>({});
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
    if (dataInfo) {
      setCoinInfoData({
        name: dataInfo?.name,
        symbol: dataInfo?.symbol,
        description: dataInfo?.description,
        rank: dataInfo?.rank,
        links: dataInfo?.links,
      });
    }
  }, [dataInfo]);

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

  const handleLinkPress = React.useCallback((url?: string | null) => {
    if (url) {
      Linking.openURL(url);
    }
  }, []);

  return (
    <StScrollViewContainer>
      <StTextCoinTitle>{coinInfoData.name}</StTextCoinTitle>
      <StViewChartContainer>
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
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}
      </StViewChartContainer>
      <StViewInfoContainer>
        {coinInfoData.description && (
          <StViewInfoRow>
            <StTextInfoLabel>Description</StTextInfoLabel>
            <StTextInfoValue>{coinInfoData.description}</StTextInfoValue>
          </StViewInfoRow>
        )}
        {coinInfoData.rank && (
          <StViewInfoRow>
            <StTextInfoLabel>Rank</StTextInfoLabel>
            <StTextInfoValue>{coinInfoData.rank}</StTextInfoValue>
          </StViewInfoRow>
        )}
        {coinInfoData.links && (
          <StViewInfoRow>
            <StTextInfoLabel>Links</StTextInfoLabel>
            {coinInfoData.links?.website && (
              <StBtnInfoLink
                key={`${coinInfoData.id}-website`}
                onPress={() => handleLinkPress(coinInfoData.links?.website[0])}
              >
                <StTextInfoLink>Website</StTextInfoLink>
              </StBtnInfoLink>
            )}
            {Object.keys(coinInfoData.links).length > 0 &&
              Object.keys(coinInfoData.links).map((linkKey) => {
                if (linkKey === 'website' || linkKey === 'explorer')
                  return null;
                const link = coinInfoData.links?.[linkKey];
                return (
                  <StBtnInfoLink
                    key={`${coinInfoData.id}-${linkKey}`}
                    onPress={() => handleLinkPress(link?.[0])}
                  >
                    <StTextInfoLink>
                      {(linkKey[0].toUpperCase() + linkKey.slice(1)).replace(
                        '_',
                        ' '
                      )}
                    </StTextInfoLink>
                  </StBtnInfoLink>
                );
              })}
          </StViewInfoRow>
        )}
      </StViewInfoContainer>
    </StScrollViewContainer>
  );
};

export default CoinDetail;
