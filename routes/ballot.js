var express = require('express');
var router = express.Router();

const ethers = require('ethers');
const projectID = "920def75f3a245e981a1d9b60033574a";
//const web3 = new Web3('HTTP://127.0.0.1:7545')
const contractAddress = '0x803787CEE9c9b989bbe4a4d9159AB9d321a928cD' // markos contract
const contractABI = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

let url = "HTTP://127.0.0.1:7545";
let customHttpProvider = new ethers.providers.JsonRpcProvider(url);


let contract = new ethers.Contract(contractAddress, contractABI, customHttpProvider.getSigner(0));

router.post('/', async function (req, res, next) {
  let currentValue = await contract.set(req.body.hash)

  const finalResult = (currentValue)
  res.send('Updated!');
  // res.send(currentHash);
});

module.exports = router;