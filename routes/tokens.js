var express = require('express');
var router = express.Router();

const ethers = require('ethers');
const projectID = "920def75f3a245e981a1d9b60033574a";
//const web3 = new Web3('HTTP://127.0.0.1:7545')
const contractAddress = '0x2bA68C2c416Bf71eb051eF0a68ABBD3366995601' // markos contract
const contractABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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


  res.send('Updated!');
});
 

module.exports = router;