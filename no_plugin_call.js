//~~~~~ IMPORTS
const { Web3 } = require("web3");
require("dotenv").config();
const web3 = new Web3(process.env.mainnet);
//~~~~~ IMPORTS

//1. find the ABI of defaultAggregatorV3
const abi = require("./abi.json");

async function main() {
  //2. find the address of the contract
  const contractAddressBTC = "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c";
  const contractAddressETH = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";

  //3. initialize the contract
  const contractBTC = new web3.eth.Contract(abi, contractAddressBTC);
  const contractETH = new web3.eth.Contract(abi, contractAddressETH);

  //4. call the contract
  const btcPrice = await contractBTC.methods.latestAnswer().call();
  const ethPrice = await contractETH.methods.latestAnswer().call();

  //5. show the result
  console.log("BTC price is:", String(btcPrice).slice(0, 5));
  console.log("ETH price is:", String(ethPrice).slice(0, 4));
}

main();
