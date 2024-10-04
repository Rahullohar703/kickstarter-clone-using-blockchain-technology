require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// Setting up the provider using environment variables
const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.INFURA_ENDPOINT
);

// Creating a Web3 instance
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    // Get the list of accounts
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    // Deploy the contract
    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({ data: compiledFactory.evm.bytecode.object })
      .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
  } catch (error) {
    // Log the error if deployment fails
    console.error('Deployment failed:', error);
  } finally {
    // Stop the provider to end the connection
    provider.engine.stop();
  }
  console.log('MNEMONIC:', process.env.MNEMONIC);
  console.log('INFURA_ENDPOINT:', process.env.INFURA_ENDPOINT);
};

// Call the deploy function
deploy();
