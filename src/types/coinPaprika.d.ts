export type Coin = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

export type CoinInfo = {
  id?: string;
  name?: string;
  symbol?: string;
  parent?: {
    id?: string;
    name?: string;
    symbol?: string;
  };
  rank?: 1;
  is_new?: false;
  is_active?: true;
  type?: string;
  logo?: string;
  tags?: {
    id?: string;
    name?: string;
    coin_counter?: number;
    ico_counter?: number;
  }[];
  team?: {
    id?: string;
    name?: string;
    position?: string;
  }[];
  description?: string;
  message?: string;
  open_source?: true;
  hardware_wallet?: true;
  started_at?: string;
  development_status?: string;
  proof_type?: string;
  org_structure?: string;
  hash_algorithm?: string;
  contract?: string;
  platform?: string;
  contracts?: {
    contract?: string;
    platform?: string;
    type?: string;
  }[];
  links?: {
    [linkName: string]: string[];
  };
  links_extended?: {
    url?: string;
    type?: string;
    stats?: {
      subscribers?: number;
      contributors?: number;
      stars?: number;
    };
  }[];
  whitepaper?: {
    link?: string;
    thumbnail?: string;
  };
  first_data_at?: string;
  last_data_at?: string;
};

export type CoinHistoricalTick = {
  timestamp: string;
  price: number;
  volume_24h: number;
  market_cap: number;
};
