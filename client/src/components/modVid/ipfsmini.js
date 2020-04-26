const IPFS = require('ipfs-mini');
const ipfsmini = new IPFS({ host: 'ipfs.infura.io', port: 5004, protocol: 'https' });

export default ipfsmini;