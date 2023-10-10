import 'dotenv/config';
import express from "express";
import { connectMongo } from './database.js'
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import { libroRouter } from './src/routes/libroRoutes.js'
import { autorrRouter } from './src/routes/autorRoutes.js'

const app = express();

app.use(express.json())


app.use('/api/libro', libroRouter )
app.use('/api/autor', autorrRouter)

app.listen(process.env.PORT, () => {
    connectMongo()
    console.log('puerto escuchando', process.env.PORT)
})