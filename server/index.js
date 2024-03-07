import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

//Configuration
dotenv.config();
const app = express();

//MongoDB Connect
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
app.use(cors());

//Route
app.get("/", (req, res) => res.send({ message: "App Listening" }));

app.use("/api/v1/books", booksRoute);
