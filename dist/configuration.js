"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration = void 0;
const schems_1 = require("@mitz/schems");
const types_1 = require("./types");
const configuration = Object.freeze({
    storageKey: 'decentraland-connect-storage-key',
    [types_1.ProviderType.INJECTED]: {},
    [types_1.ProviderType.FORTMATIC]: {
        apiKeys: {
            [schems_1.ChainId.ETHEREUM_MAINNET]: 'pk_live_F8E24DF8DD5BCBC5',
            [schems_1.ChainId.ETHEREUM_ROPSTEN]: 'pk_test_5B728BEFE5C10911',
            [schems_1.ChainId.ETHEREUM_RINKEBY]: 'pk_test_5B728BEFE5C10911',
            [schems_1.ChainId.ETHEREUM_KOVAN]: 'pk_test_5B728BEFE5C10911'
        }
    },
    [types_1.ProviderType.WALLET_CONNECT]: {
        urls: {
            [schems_1.ChainId.ETHEREUM_MAINNET]: 'https://mainnet.infura.io/v3/fa3357a65e2d4214ac735190646a3c53',
            [schems_1.ChainId.ETHEREUM_ROPSTEN]: 'https://ropsten.infura.io/v3/fa3357a65e2d4214ac735190646a3c53',
            [schems_1.ChainId.ETHEREUM_RINKEBY]: 'https://rinkeby.infura.io/v3/fa3357a65e2d4214ac735190646a3c53',
            [schems_1.ChainId.ETHEREUM_KOVAN]: 'https://kovan.infura.io/v3/fa3357a65e2d4214ac735190646a3c53'
        }
    }
});
function getConfiguration() {
    return configuration;
}
exports.getConfiguration = getConfiguration;
//# sourceMappingURL=configuration.js.map