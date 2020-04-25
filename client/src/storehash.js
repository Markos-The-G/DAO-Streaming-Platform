import web3 from './web3';

const address = ''; // after deploying
const abi = [{

}] // after deployed contract

export default new web3.eth.Contract(abi, address);