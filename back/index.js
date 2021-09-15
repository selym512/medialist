const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const https = require("https")
const fs = require("fs");
const helmet = require("helmet");


const options = {
  key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
  cert: fs.readFileSync("/srv/www/keys/chain.pem")
};

const app = express();
app.use(helmet());

app.use(logger);

const PORT = process.env.PORT || 5001;


app.use(cors({credentials: true, origin: "http://18.117.173.166/"}));
app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/api/members', require('./routes/api/members'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/movies', require('./routes/api/movies'));


const root = require('path').join(__dirname, '../client', 'build');
app.use(express.static(root));
app.use('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
https.createServer(options, app).listen(8080);





