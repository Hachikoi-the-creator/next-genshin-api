// import * as dotenv from "dotenv";
// dotenv.config();
import mongoose from "mongoose";
import express from "express";
import routesIndex from "./routes/routesIndex.js";

// ! MONGOOSE stuff
// Connect to BD
mongoose.connect(
  "mongodb+srv://alice-dev:NOx9i1PnpnSY6ajS@genshin-api-mango.p7cm974.mongodb.net/genshin-data"
);
const database = mongoose.connection;

//? mongoose's error handler
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// ! EXPRESS stuff
const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});

// start all our endpoints whit /api
app.use("/api", routesIndex);
