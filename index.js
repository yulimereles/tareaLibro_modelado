import 'dotenv/config';
import express from "express";
import { connectMongo } from './database.js'




const app = express();

app.listen ( () => {
    connectMongo()
    console.log('puerto escuchando')
})