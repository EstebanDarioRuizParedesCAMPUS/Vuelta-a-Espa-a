import mongoose from "mongoose";

const etapasShema = mongoose.Schema({
    participantes: {
        type: String,
        required: true,
        trim:true,
    },
    localizacion: {
        type: String,
        required:true,
        trim:true,
    },
    recorrido :{
        type: String,
        required:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Etapas = mongoose.model("etapas", etapasShema)

export default Etapas