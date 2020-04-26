var ballot = artifacts.require("./tokens.sol");

module.exports = function(deployer) {
  deployer.deploy(tokens);
};
