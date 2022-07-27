import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

import {
  PRIVILEGED_ORIGINS,
  COSMOS_REST_CONFIG,
  COSMOS_REST_ENDPOINT,
  COSMOS_RPC_CONFIG,
  COSMOS_RPC_ENDPOINT,
} from "./config.var";

export const EmbedChainInfos: ChainInfo[] = [
  {
    rpc: COSMOS_RPC_ENDPOINT,
    rpcConfig: COSMOS_RPC_CONFIG,
    rest: COSMOS_REST_ENDPOINT,
    restConfig: COSMOS_REST_CONFIG,
    chainId: "morocco-1",
    chainName: "Crhonic Chain",
    stakeCurrency: {
      coinDenom: "CHT",
      coinMinimalDenom: "ucht",
      coinDecimals: 6,
      coinGeckoId: "cht",
    },
    walletUrl:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/"
        : "http://localhost:8080/",
    walletUrlForStaking:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#"
        : "http://localhost:8080/",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cosmos"),
    currencies: [
      {
        coinDenom: "CHT",
        coinMinimalDenom: "ucht",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CGAS",
        coinMinimalDenom: "ucgas",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    coinType: 118,
    features: ["ibc-transfer", "ibc-go"],
  },
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = PRIVILEGED_ORIGINS;
