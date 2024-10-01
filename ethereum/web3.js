// ethereum/web3.js
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/09f799bc191341f7b809f509e453f6f6'
  );
  web3 = new Web3(provider);
}

export default web3;
