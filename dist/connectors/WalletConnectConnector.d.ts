import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { IWalletConnectProviderOptions } from '@walletconnect/types';
export declare const URI_AVAILABLE = "URI_AVAILABLE";
export interface WalletConnectConnectorArguments extends IWalletConnectProviderOptions {
    supportedChainIds?: number[];
}
export declare class UserRejectedRequestError extends Error {
    constructor();
}
export declare class BaseWalletConnectConnector extends AbstractConnector {
    static isEnabling?: boolean;
    walletConnectProvider?: any;
    private readonly config;
    constructor(config: WalletConnectConnectorArguments);
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null | string>;
    deactivate(): void;
    close(): Promise<void>;
    private handleChainChanged;
    private handleAccountsChanged;
    private handleDisconnect;
}
export declare class WalletConnectConnector extends BaseWalletConnectConnector {
    params: {
        rpc: Record<number, string>;
        qrcode: boolean;
        pollingInterval: number;
    };
    constructor();
    getRpc(): Promise<string>;
    getQrCode(): boolean;
    getPollingInterval(): number;
}
