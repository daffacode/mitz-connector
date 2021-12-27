import { ChainId } from '@mitz/schems';
import { AbstractConnector } from './connectors';
import { Storage } from './storage';
import { ProviderType, ConnectionData, ConnectionResponse, Provider } from './types';
import './declarations';
export declare class ConnectionManager {
    storage: Storage;
    connector?: AbstractConnector;
    constructor(storage: Storage);
    connect(providerType: ProviderType, chainId?: ChainId): Promise<ConnectionResponse>;
    tryPreviousConnection(): Promise<ConnectionResponse>;
    getAvailableProviders(): ProviderType[];
    disconnect(): Promise<void>;
    getProvider(): Promise<Provider>;
    createProvider(providerType: ProviderType, chainId?: ChainId): Promise<Provider>;
    buildConnector(providerType: ProviderType, chainId: ChainId): AbstractConnector;
    getConnectionData(): ConnectionData | undefined;
    private setConnectionData;
    private isClosableConnector;
}
export declare const connection: ConnectionManager;
