import mongoose from "mongoose";

const temperaturaSchema = new mongoose.Schema(
    {
        id:{type: String},
        dados: {type: String, required: true},
        data: {type: String},
        hora: {type: String}
        
    },
    {
        versionKey: false
    }
)

const temperatura = mongoose.model("temperatura", temperaturaSchema)

export default temperatura