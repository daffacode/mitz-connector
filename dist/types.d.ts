/// <reference types="node" />
import { ChainId } from '@mitz/schems';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { EventEmitter } from 'events';
export declare enum ProviderType {
    INJECTED = "injected",
    FORTMATIC = "formatic",
    NETWORK = "network",
    WALLET_CONNECT = "wallet_connect"
}
export declare namespace Request {
    type Method = string;
    type Params = readonly unknown[] | object;
    type Arguments = {
        readonly method: Method;
        readonly params?: Params;
        readonly jsonrpc?: string;
        readonly id?: number;
    };
    type Callback = (err: number | null, value: any) => void;
}
export interface Provider extends EventEmitter {
    isDapper: boolean;
    isFortmatic: boolean;
    isMetamask: boolean;
    request(reqArgs: Request.Arguments): Promise<unknown>;
    send(method: Request.Method, params?: Request.Params): Promise<unknown>;
    send(method: Request.Arguments, params?: Request.Callback): Promise<void>;
    send(method: Request.Method | Request.Arguments, params?: Request.Params | Request.Callback): Promise<unknown>;
    sendAsync(method: Request.Arguments, params?: Request.Callback): Promise<void>;
}
export declare type LegacyProvider = Pick<Provider, 'send' | 'sendAsync' | 'on' | 'emit' | 'removeListener' | 'isDapper' | 'isFortmatic' | 'isMetamask'>;
export declare type ConnectionData = {
    providerType: ProviderType;
    chainId: ChainId;
};
export declare type ConnectionResponse = {
    provider: Provider;
    providerType: ProviderType;
    chainId: ChainId;
    account: null | string;
};
export interface ClosableConnector extends AbstractConnector {
    close: () => Promise<void>;
}
