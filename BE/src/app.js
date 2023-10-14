import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;

