import mongoose from "mongoose";
async function conectaDB(){
    mongoose.connect("mongodb+srv://monica_manfrinato:SENAI21@M@biblioteca.xairbvp.mongodb.net/biblioteca?appName=Biblioteca ")
    return mongoose.connection
}

export default conectaDB