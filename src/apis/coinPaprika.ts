import type { Coin } from '~/types/coinPaprika';

const BASE_URL = 'https://api.coinpaprika.com/v1';

const COINS_URL = `${BASE_URL}/coins`;

export const getCoins = (): Promise<Coin[]> =>
  fetch(COINS_URL).then((resp) => resp.json());
