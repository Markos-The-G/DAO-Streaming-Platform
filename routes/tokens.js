var express = require('express');
var router = express.Router();

const ethers = require('ethers');
const projectID = "920def75f3a245e981a1d9b60033574a";
//const web3 = new Web3('HTTP://127.0.0.1:7545')
const contractAddress = '0xaf868f034C3f8A1e4403e595bfa5b752d6b6528E' // markos contract
const contractABI = [
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

router.post('/report', async function (req, res, next) {
	const someFunction = await contract.transfer(req.body.wallet, req.body.amount)

	var responseMessage = (`successfully gave ${req.body.wallet} ${req.body.amount} DTV`)

	res.send(responseMessage);
});

router.post('/balance', async function (req, res, next) {
	let balance = await contract.balanceOf(req.body.wallet)
	var responseMessage = (`${req.body.wallet} has ${balance} tokens`)
	res.send(balance);
});

module.exports = router;