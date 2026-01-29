import mongoose from "mongoose";

const emprestimoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    idEmprestimo: {type: String, require: true},
    idExemplar: {type: String, required: true},
    idMatricula: {type: String, required: true},
    dataEmprestimo: {type: Date, required: true},
    previsaoDevolucao: {type: Date, required: true},
    dataDevolucao: {type: Date}
}, 
{versionKey: false}
)

const emprestimo = mongoose.model ("emprestimo", emprestimoSchema) //'emprestimo' é a collection do mongoDB
export default emprestimo