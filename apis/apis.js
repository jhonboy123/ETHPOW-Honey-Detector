// For making the apis
import express from 'express';
const router = express.Router();

// Functions
import { main as LfgSwap } from './dexs/LFGSwap.js';
import { main as UniWSwap } from './dexs/UniWSwap.js';
import { main as PowSwap } from './dexs/PowSwap.js';

// Honeypot detector apis
router.get('/lfgswap/:address/:address2', LfgSwap);
router.get('/uniwswap/:address/:address2', UniWSwap);
router.get('/powswap/:address/:address2', PowSwap);
export default router;
