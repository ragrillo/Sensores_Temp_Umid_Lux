import mongoose from "mongoose";

mongoose.connect('mongodb+srv://ragrillo:LLmT5cXsT7QmcJHv@dadossensores.czvqnyc.mongodb.net/?retryWrites=true&w=majority')

let db = mongoose.connection;

export default db;