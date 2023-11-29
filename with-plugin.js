//~~~~~ IMPORTS
const { ChainlinkPlugin, MainnetPriceFeeds } = require("@chainsafe/web3-plugin-chainlink");
const { Web3 } = require("web3");
require("dotenv").config();
const web3 = new Web3(process.env.mainnet);
const chainlinkPlugin = new ChainlinkPlugin();
web3.registerPlugin(chainlinkPlugin);
//~~~~~ IMPORTS

async function main() {
  //1. call the getPrice function from the plugin
  const btcPrice = await chainlinkPlugin.getPrice(MainnetPriceFeeds.BtcUsd);
  const ethPrice = await chainlinkPlugin.getPrice(MainnetPriceFeeds.EthUsd);

  //2. show the result
  console.log("BTC price is:", String(btcPrice.answer).slice(0, 5));
  console.log("ETH price is:", String(ethPrice.answer).slice(0, 4));
}

main();
