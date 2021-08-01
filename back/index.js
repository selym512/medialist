const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const cors = require('cors');
// const mongoose = require('mongoose');
// const pool = require('./db');
// const {MongoClient} = require("mongodb");
// const db

// const uri = "mongodb+srv://milk:c4kaeS1xWjCkeQet@cluster0.wteq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// const client = new MongoClient(uri);




const app = express();

app.use(logger);
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/members', require('./routes/api/members'));

const PORT = 5001;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




