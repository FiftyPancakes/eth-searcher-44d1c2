const { ethers } = require('ethers');
const WebSocket = require('ws');

const PRIVATE_KEY = process.env.SEARCHER_KEY;
const RPC = 'wss://eth-mainnet.g.alchemy.com/v2/demo';

async function monitor() {
  const ws = new WebSocket(RPC);
  ws.on('message', (data) => {
    // Process pending txs
  });
}

monitor();
