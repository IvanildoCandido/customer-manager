const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = 3000;

const server = express();
server.use(cors());
server.use(express.json());

server.use('/api', routes);

server.listen(PORT, () => {
  console.log('Server running at port:', PORT);
});
