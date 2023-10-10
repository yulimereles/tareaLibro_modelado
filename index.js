import 'dotenv/config';
import express from "express";
import { connectMongo } from './database.js'
import { autorRouter } from './src/routes/autorRoutes.js'
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

const app = express();

app.use(express.json())

app.use('/api/autor', autorRouter)

app.listen(process.env.PORT, () => {
    connectMongo()
    console.log('puerto escuchando', process.env.PORT)
})