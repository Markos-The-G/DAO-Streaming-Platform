var express = require('express');
var router = express.Router();

const ethers = require('ethers');

const IPFS = require('ipfs-mini');
const ipfsmini = new IPFS({ host: 'ipfs.infura.io', port: 5003, protocol: 'https' });

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

const contractAddress = '0x77D18AcBCCE4E846434482fc0DcbFfD5d1aC7DC4' // markos contract
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

router.get('/', async function (req, res, next) {
  let currentValue = await contract.get()
  let vidName = req.body.name;
  
  var raw = "";

  var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
  };
  
  const url = "https://gateway.ipfs.io/ipfs/" + currentValue

  var data = "";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);

      let wdata = this.responseText;

      let new_obj = JSON.parse(wdata)
      const vidHash = new_obj[vidName]
      console.log(vidHash)
      const finalResult = (url, vidHash)
      res.send(vidHash)
    }
  });
  
   xhr.open("GET", url);
  
   xhr.send(data);

});

module.exports = router;