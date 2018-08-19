const config = require('./config');
const Web3 = require('web3');

const getTokenTransferEvents = function (token) {
  const provider = new Web3.providers.HttpProvider(config.ethNodeAddress);
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(config.ERC20_ABI, token);
  return contract.getPastEvents('Transfer', {
    fromBlock: config.statingBlock,
    toBlock: 'latest',
    // filter: {from: '0x9a4cf09f31795b310aa29c3669e84bce9d3a5b8f'},
    // topics:[web3.utils.sha3('Transfer(address,address,uint256)')]
  })
};

module.exports = {getTokenTransferEvents};
