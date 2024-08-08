const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const imgSchema = require('./model.js');
const fs = require('fs');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

app.set("view engine", "ejs");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected");
    
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage: storage });

// Define your GraphQL schema
const schema = buildSchema(`
    type Image {
        name: String
        desc: String
    }

    type Query {
        images: [Image]
    }

    type Mutation {
        addImage(name: String, desc: String): Image
    }
`);

// Define resolvers for your queries and mutations
const root = {
    images: () => imgSchema.find({}),
    addImage: ({ name, desc }) => {
        // Add image logic here
    }
};

// Add GraphQL endpoint to your Express server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // Enable GraphiQL for testing
}));

var port = process.env.PORT || '3000';

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('Server listening on port', port);
});