require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hidden enter october foot custom recipe noise attitude coral light army gasp'; 
let testAccounts = [
"0x3003b004cdd446f81ce49aac325c9875749f635f080d3039144fbdf180d9de6f",
"0xd71fd780fbbcb9402182750529d90415c6cd4950938a323b1fe751c2b09752cc",
"0xcf260f57d0b114a9f6d3bb66d2dd51d172a6f0d961b4c785e1e12222d8c1f9c6",
"0x8fa8dae75282359a9062df0ce40a16fdad5ae67bbbf5d18806eb89d330c2b691",
"0x56e3f9890e4517e097f170b37e1416e9b3cafd4780c49b1b9adaca4d71b8cece",
"0xb9457f5255bbca75128a9410b9eb66c1eb4c8fec230b0c91521df41f07f4e3bf",
"0x60bdf83100512c88d2eeabdf9c6b78c75a621701f51e416e4759e4c44f4c9b6d",
"0x44c2a993790785defb0fb2ca214af4f28a5851be823340552affe0ade8d6a969",
"0x956d337039872953d4e1320c1ccd9f1c70b02ea98f98fe08b25e0c4b3a1910ad",
"0xa27a1b643bcac0ed048e85c079ba3735f576c8a03022104038253dd25454b0e8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


