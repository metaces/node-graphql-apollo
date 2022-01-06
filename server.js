const express = require('express');
const { apolloServer } = require('./apolloServer.js');
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
  origin: "*",
  credentials: false,
}

const app = express();
app.use(cors(corsOptions));

apolloServer.start().then(
  () => {
    apolloServer.applyMiddleware({ app });
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/graphql`);
})