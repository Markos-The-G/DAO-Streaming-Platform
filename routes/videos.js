var express = require('express');
var router = express.Router();

const axios = require('axios')
const Web3 = require('web3')
const projectID = "920def75f3a245e981a1d9b60033574a";
const web3 = new Web3('https://rinkeby.infura.io/v3/920def75f3a245e981a1d9b60033574a')
const contractAddress = '0x1e82264b326b611102f850c58c4e61f3f09f41a7' // markos contract
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

function myFunction(myParam) {
    var contract = new web3.eth.Contract(contractABI, contractAddress)
    var callData = contract.methods.get(myParam).call()
    callData.then(function(result) {
        console.log(result)
    })
}

function settt() {
  var contract = new web3.eth.Contract(contractABI, contractAddress)
  var callData = contract.methods.get().call()
  callData.then(function(result) {
      console.log(result)
  })
}

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



// creating a new uploaded post
router.post('/', function (req, res, next) {

  async function makePostRequest() {
    const network = 'https://mainnet.infura.io/v3/920def75f3a245e981a1d9b60033574a'
    let res = await axios.post(network);
    const result = settt();
    res.send(result);


  makePostRequest();

  // const currentHash = getFunction()
  // setFunction(req.body.hash);



  
  }



  res.send(req.body.hash);
  // res.send(currentHash);
});



module.exports = router;