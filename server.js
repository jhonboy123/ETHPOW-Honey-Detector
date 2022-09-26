import express from 'express';
import http from 'http';
import { port } from './config/const.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Apis route
import apis from './apis/apis.js';
app.use('/api', apis);

// Server creation and listening
const httpserver = http.createServer(app);
httpserver.listen(port, async () => {
  console.log(`The crypto honeypot detector server is running on port ${port}`);
});
