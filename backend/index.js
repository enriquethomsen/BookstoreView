import express from 'express';
/* import { PORT, MONGO_URL } from './config.js'; */
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const MONGO_URL = MONGO_URL

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
/* app.use(cors()); */


app.use(
 cors({
     origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
 );
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGO_URL)
  .catch((error) => {
    console.log(error);
  });