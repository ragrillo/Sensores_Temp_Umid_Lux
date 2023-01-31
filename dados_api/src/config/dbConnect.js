import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config()


mongoose.connect( process.env.HOST_BD)
    .then(() => console.log('Conectado'))
    .catch ((err) => {
        console.error(err.message)
    })

let db = mongoose.connection;


export default db;