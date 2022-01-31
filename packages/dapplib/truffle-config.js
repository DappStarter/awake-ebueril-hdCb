require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stone raise stereo purity harvest ghost army gift'; 
let testAccounts = [
"0x5b8fbfdb9c13d515728cab0b80081d5168bf7a11e7c8475722b2650df10a5cc1",
"0x6d89fb8a15e0935a139d69c7b729ea01572107c3654f38bcca794e2328bea389",
"0x1a072393a1076749f7347daec57805961ec19333f20553bc93a19f3c6c203e04",
"0xb31fa2014744b23f325a6cb384677e31f6b79a67b397065630a72fc1e24e8e7b",
"0x051d5c76d1024fd4570183a21ce66ee1bc817f615f5148b217508c8020c00fde",
"0xa1e49c8270bd5ea12a1844fb456cab49a5c18488d64f5ac447503b9f7738c08c",
"0xbd879fa29571899ec07fbe2cddd8514cc0598ce3469dbc8b329cae0fdac5a697",
"0xac210518a7a3a53621282f9f80a16659ca4cb9169fc6e5390c380f5110aae0b7",
"0xa8e74c2adc834b1497a6bd85c664af597b727927fb40213030f4e01f1275cb21",
"0x38331be075f2f03bb9f0ca365ad59d7836b2f469073193b1626b16c7fe45b193"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

