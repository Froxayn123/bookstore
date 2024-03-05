import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

//Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const mongoDBURL = `mongodb+srv://root:${process.env.MONGODBPW}@bookstore.a8tfoms.mongodb.net/books-collection?retryWrites=true&w=majority&appName=bookstore`;

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
app.use(cors());

//Route
app.use("/books", booksRoute);

//MongoDB Connect
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
