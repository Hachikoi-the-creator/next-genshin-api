require("dotenv").config();
const { MongoClient } = require("mongodb");
// Connection URI
const uri = `mongodb+srv://alice-dev:${process.env.SECURE_PASSWORD}@genshin-api-mango.p7cm974.mongodb.net?retryWrites=true&w=majority`;
// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    const res = await client.db("genshin-data").collection("characters");
    console.log("Connected successfully to server", res);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// !------------------------------
// const { MongoClient } = require("mongodb");
// // ? connect to db, make queries and disconnect
// async function main(func) {
//   const uri = `mongodb+srv://alice-dev:${process.env.SECURE_PASSWORD}@genshin-api-mango.p7cm974.mongodb.net?retryWrites=true&w=majority`;
//   // instance of mongodb
//   const client = new MongoClient(uri);
//   // const client = new MongoClient(uri,{useNewUrlParser: true,
//   //   useUnifiedTopology: true,}); //If theres deprecation warnings
//   try {
//     await client.connect();
//     await func(client);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     // close connection to db
//     await client.close();
//   }
// }

// // print all the available clusters
// async function listDatabases(client) {
//   // databasesList = await client.db().admin().listDatabases();

//   // console.log("Databases:");
//   // databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
//   // -------------------
//   client.on("commandStarted", (started) => console.log(started));
//   const res = await client.db().collection("characters").find();
//   console.log(res);
//   // await client.insertOne({ name: "spot", kind: "dog" });
//   // await client.find();
// }

// main(listDatabases).catch(console.error);
