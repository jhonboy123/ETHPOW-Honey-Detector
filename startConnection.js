import {
  // Http providers
  ETHPowhttpprovider,
} from './config/const.js';

// For Web3 connection
import Web3 from 'web3';

const options = {
  keepAlive: true,
  timeout: 10000,
};

export const ETHPowprovider = new Web3.providers.HttpProvider(ETHPowhttpprovider, options);
