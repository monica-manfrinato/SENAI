import mongoose from "mongoose";

const autorLivroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    id_autor_livro: {type: String, require: true},
    id_autor: {type: String, required: true},
    ISBN: {type: String, required: true}
}, 
{versionKey: false}
)

const autorLivro = mongoose.model ("autorLivro", autorLivroSchema) //'autorLivro' é a collection do mongoDB
export default autorLivro