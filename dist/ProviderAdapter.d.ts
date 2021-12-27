import { LegacyProvider, Provider, Request } from './types';
declare type Method = Request.Method;
declare type Params = Request.Params;
declare type Arguments = Request.Arguments;
declare type Callback = Request.Callback;
/**
 * Adapt popular provider methods to they can work across different popular web3 libs (such as web3x and ethers).
 * `sendAsync`, another popular method, is not being adapted here as we didn't find it necessary in our testing.
 * In case you need to adapt it, please create and issue or send a PR
 */
export declare class ProviderAdapter {
    provider: LegacyProvider | Provider;
    id: number;
    constructor(provider: LegacyProvider | Provider);
    static adapt(provider: LegacyProvider | Provider): Provider;
    on: (event: string | symbol, listener: (...args: any[]) => void) => Provider;
    emit: (event: string | symbol, ...args: any[]) => boolean;
    removeListener: (event: string | symbol, listener: (...args: any[]) => void) => Provider;
    request: ({ method, params }: Arguments) => Promise<unknown>;
    sendAsync: (args: Arguments, callback: Callback) => Promise<void>;
    send(method: Method, params?: Params): Promise<unknown>;
    send(args: Arguments, callback: Callback): Promise<void>;
    isModernProvider(): boolean;
    hasSendAsync(): boolean;
    patchOldMobile(): void;
}
export {};
