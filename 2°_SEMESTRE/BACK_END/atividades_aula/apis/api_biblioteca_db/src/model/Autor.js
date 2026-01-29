import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    idAutor: {type: String, require: true},
    nomeAutor: {type: String, required: true},
    nacionalidade: {type: String, required: true}
}, 
{versionKey: false}
)

const autor = mongoose.model ("autor", autorSchema) //'livros' é a collection do mongoDB
export default autor