const config = require('./config');
const Web3 = require('web3');

const getTokenTransferEvents = function (token, limit) {
  const provider = new Web3.providers.HttpProvider(config.ethNodeAddress);
  const web3 = new Web3(provider);

  const data = {};

  return web3.eth.getBlockNumber()
    .then((latestBlockNumber) => {
      return web3.eth.getBlock(latestBlockNumber)
    })
    .then((latestBlock) => {
      data.end_timestamp = latestBlock.timestamp;
      data.end_block = latestBlock.number;
      const startingBlockNumber = latestBlock.number - (limit * config.statisticsBlocksWindowLength);
      return web3.eth.getBlock(startingBlockNumber)
    })
    .then((startingBlock) => {
      data.start_timestamp = startingBlock.timestamp;
      data.start_block = startingBlock.number;
    })
    .then(() => {
      const contract = new web3.eth.Contract(config.ERC20_ABI, token);
      return contract.getPastEvents('Transfer', {
        fromBlock: data.start_block,
        toBlock: 'latest',
      })
    })
    .then((events) => {
      data.events = events;
      return data;
    });
};

module.exports = {getTokenTransferEvents};
