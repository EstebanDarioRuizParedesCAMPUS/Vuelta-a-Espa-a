import mongoose from "mongoose";

const premiosShema = mongoose.Schema({
    Premio: {
        type: String,
        require: true,
        trim:true,
    },
    Etapa: {
        type: String,
        require:true,
    },
},
{
    timestamps: true,
})

const Premio = mongoose.model("premios", premiosShema)

export default Premio