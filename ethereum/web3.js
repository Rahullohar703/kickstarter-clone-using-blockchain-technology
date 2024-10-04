// ethereum/web3.js
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://eth-sepolia.g.alchemy.com/v2/tHVqhbO7_RsGSrQrK67i9E9D3k2ZWm1j'
  );
  web3 = new Web3(provider);
}

export default web3;
