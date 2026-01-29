import mongoose from "mongoose";

const exemplarSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    idExemplar: {type: String, require: true},
    ISBN: {type: String, required: true},
    statusExemplar: {type: String, required: true}
}, 
{versionKey: false}
)

const exemplar = mongoose.model ("exemplar", exemplarSchema) //'exemplar' é a collection do mongoDB
export default exemplar