require('dotenv').config()
const port = process.env.PORT || 5000;

const express = require('express');
const app = express();

const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");

const colors = require('colors');
const connectDB = require("./config/database");

const startServer = () => {
  // connect to database
  connectDB();
  
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
  }));
  
  app.use("/", (req, res) => {
    res.json({
      "hostname":req.hostname,
      "message": "server is alive"
    });
  })
  
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  })
}

module.exports = startServer

