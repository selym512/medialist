const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const pool = require('./db');
// const {MongoClient} = require("mongodb");
// const db

// const uri = "mongodb+srv://milk:c4kaeS1xWjCkeQet@cluster0.wteq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// const client = new MongoClient(uri);
const app = express();

app.use(logger);

const PORT = process.env.PORT || 5001;



// let allowCrossDomain = function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    // res.header('Access-Control-Allow-Credentials', "true");
    // next();
// };

// app.use(allowCrossDomain);

app.use(cors({credentials: true, origin: "http://18.117.173.166/"}));
app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/members', require('./routes/api/members'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/movies', require('./routes/api/movies'));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client', 'build')));
//     app.get('/*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
//     })
//   }

const root = require('path').join(__dirname, '../client', 'build');
app.use(express.static(root));
app.use('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




