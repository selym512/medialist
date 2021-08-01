// const {MongoClient} = require("mongodb");
// const uri = "mongodb+srv://milk:c4kaeS1xWjCkeQet@cluster0.wteq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const client = new MongoClient(uri);



// async function run() {
//     try {
//       await client.connect();
//       const database = client.db('sample_mflix');
//       const users = database.collection('Users');
//     //   const userDocument = {
//     //     id: '1',
//     //     name: "Myles Santapaga",
//     //     email: "santa@gmail.com"
//     //   };
//       const result = await users.insertOne(userDocument);
//       // Query for a movie that has the title 'Back to the Future'
//       const query = { id: '1' };
//       const user = await users.findOne(query);
//       console.log(user);
//       console.log("it ran.")
//     } finally {
//       // Ensures that the client will close when you finish/error
//       console.log("something happened, closing now.")
//       await client.close();
//     }
//   }
//   run().catch(console.dir);



// // // create postgreSQL connection
// // const pool = new Pool({
// //     user: "postgres",
// //     host: "localhost",
// //     database: "postgres",
// //     password: " ",
// //     port: 5432
// // })

// // pool.query('SELECT NOW()', (err, res) => {
// //     console.log(err, res)
// //     pool.end()
// // })

// module.exports = run;