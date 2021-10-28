const express = require('express');
const { MongoClient } = require('mongodb');
var cors = require('cors');
require("dotenv").config();
const app = express();
const port = 5000;

const uri = "mongodb+srv://<username>:<password>@testdb.lsfn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

app.get('/', (req, res) => {
  res.send('Server started');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});