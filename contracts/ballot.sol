pragma solidity >=0.4.21 <0.7.0;

contract ballot {
    string ipfsHash;

    function set(string memory x) public {
        ipfsHash = x;
    }

    function get() public view returns (string memory x) {
        return ipfsHash;
    }
}

