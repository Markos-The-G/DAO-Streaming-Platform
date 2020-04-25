const IPFS = require('ipfs-mini');
const ipfsmini = new IPFS({ host: 'ipfs.infura.io', port: 5002, protocol: 'https' });

export default ipfsmini;