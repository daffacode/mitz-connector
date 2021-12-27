import { ChainId } from '@mitz/schems';
import { FortmaticConnector as BaseFortmaticConnector } from '@web3-react/fortmatic-connector';
export declare class FortmaticConnector extends BaseFortmaticConnector {
    apiKeys: Record<number, string>;
    constructor(chainId: ChainId);
    getApiKey(): Promise<string>;
}
