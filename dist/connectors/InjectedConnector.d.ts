import { ChainId } from '@mitz/schems';
import { InjectedConnector as BaseInjectedConnector } from '@web3-react/injected-connector';
export declare class InjectedConnector extends BaseInjectedConnector {
    constructor(chainId: ChainId);
}
