const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./db');
server.use(cors());
const apiRouter = require('./routes/api');

const PORT = 3000;

server.use(express.json());
server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.send('Hello World!');
});

db.once('open', () => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
