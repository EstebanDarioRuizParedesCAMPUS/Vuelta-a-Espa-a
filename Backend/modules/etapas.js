import mongoose from "mongoose";

const etapasShema = mongoose.Schema({
    participantes: {
        type: String,
        require: true,
        trim:true,
    },
    localizacion: {
        type: String,
        require:true,
        trim:true,
    },
    recorrido :{
        type: String,
        require:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Etapas = mongoose.model("etapas", etapasShema)

export default Etapas