var express = require('express');
var router = express.Router();

const axios = require('axios')
const ethers = require('ethers');
const projectID = "920def75f3a245e981a1d9b60033574a";
//const web3 = new Web3('HTTP://127.0.0.1:7545')
const contractAddress = '0x2bA68C2c416Bf71eb051eF0a68ABBD3366995601' // markos contract
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

// function myFunction(myParam) {
//     var contract = new web3.eth.Contract(contractABI, contractAddress)
//     var callData = contract.methods.set(myParam).call()
//     callData.then(function(result) {
//         return (result)
//     })
// }

//const SimpleStorage = web3.eth.contract(contractABI, contractAddress);

// function settt() {
//   var contract = new web3.eth.Contract(contractABI, contractAddress)
//   var callData = contract.methods.get().call()
//   callData.then(function(result) {
//       return (result)
//   })
// }

// const getFunction = () => {
//     var contract = new web3.eth.Contract(contractABI, contractAddress)
//     var callData = contract.methods.get().call().then((result) => {
//       return result
//     })

// }

// const setFunction = (par) => {
//     var contract = new web3.eth.Contract(contractABI, contractAddress)
//     var callData = contract.methods.set(par).call().then((result) => {
//       console.log(result)
//     }).catch((err) => {
//       console.log(err);
//     })

// }

// importing ipfs

const provider = new ethers.providers.Web3Provider(window.ethereum)

const registry = new ethers.Contract('SimpleStorage', contractABI, provider.getSigner());

// creating a new uploaded post
router.post('/', function (req, res, next) {
  const result = settt()
  // const currentHash = getFunction()
  // setFunction(req.body.hash);
  const finalResult = (result + req.body.hash)
  res.send(finalResult);
  // res.send(currentHash);
});



module.exports = router;