// Types
import type { Coin, CoinHistoricalTick, CoinInfo } from '~/types/coinPaprika';
import type { QueryFunctionContext } from '@tanstack/react-query';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = (): Promise<Coin[]> =>
  fetch(`${BASE_URL}/coins`).then((resp) => resp.json());

export const getCoinInfo = async ({
  queryKey,
}: QueryFunctionContext): Promise<CoinInfo> => {
  const [, coinId] = queryKey;
  return fetch(`${BASE_URL}/coins/${coinId}`).then((resp) => resp.json());
};

export const getCoinHistory = async ({
  queryKey,
}: QueryFunctionContext): Promise<CoinHistoricalTick[]> => {
  const [, coinId] = queryKey;
  return fetch(
    `${BASE_URL}/tickers/${coinId}/historical?start=${
      new Date().toISOString().split('T')[0]
    }&interval=1h`
  ).then((resp) => resp.json());
};
