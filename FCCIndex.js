import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import routesIndex from "./routes/routesIndex.js";

// ! MONGOOSE stuff
// Connect to BD
mongoose.connect(process.env.MANGO_CONNECTION_STRING);
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

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// start all our endpoints whit /api
app.use("/api", routesIndex);
