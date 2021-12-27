import { ChainId } from '@mitz/schems';
import { NetworkConnector as BaseNetworkConnector } from '@web3-react/network-connector';
export declare const RPC_URLS: Readonly<{
    1: string;
    3: string;
    4: string;
    5: string;
    42: string;
    137: string;
    80001: string;
}>;
export declare class NetworkConnector extends BaseNetworkConnector {
    constructor(chainId: ChainId);
}
