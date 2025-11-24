import mongoose from "mongoose";

const membroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    idMatricula: {type: String, require: true},
    nomeCompleto: {type: String, required: true},
    endereco: {type: String, required: true},
    telefoneContato:{type: String, required: true}
}, 
{versionKey: false}
)

const membro = mongoose.model ("membros", membroSchema) //'membros' é a collection do mongoDB
export default membro