const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');
const port = 9292;
const app = express();

app.get('/hello', (req,res) => {
        res.send("hello");
    }
);

app.listen(port);
console.log(`Server Running at localhost:${port}`);
