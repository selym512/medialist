const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const cors = require('cors');
// const pool = require('./db');
const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://milk:c4kaeS1xWjCkeQet@cluster0.wteq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(uri);




const app = express();

app.use(logger);
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


async function run() {
    try {
      await client.connect();
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
      const movieDocument = {
        title: 'Back to the Future',
        plot: "They go back to the Future",
        toppings: [ "San Marzano tomatoes", "mozzarella di bufala cheese" ],
      };
      const result = await movies.insertOne(movieDocument);
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
      console.log("it ran.")
    } finally {
      // Ensures that the client will close when you finish/error
      console.log("something happened, closing now.")
      await client.close();
    }
  }
  run().catch(console.dir);

