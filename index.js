import 'dotenv/config';
import express from "express";
import { connectMongo } from './database.js'
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

const app = express();

app.use(express.json())

app.listen8(process.env.PORT, () => {
    connectMongo()
    console.log('puerto escuchando', process.env.PORT)
})