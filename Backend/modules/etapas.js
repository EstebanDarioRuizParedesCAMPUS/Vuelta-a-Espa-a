import mongoose from "mongoose";

const etapasShema = mongoose.Schema({
    participante1: {
        type: String,
        require: true,
    },
    participante2: {
        type: String,
        require: true,
    },
    participante3: {
        type: String,
        require: true,
    },participante4: {
        type: String,
        require: true,
    },
    participante4: {
        type: String,
    },
    participante5: {
        type: String,
    },
    participante5: {
        type: String,
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
    },
    recorrido :{
        type: String,
        require:true,
        trim:true,  
    },
    Premio :{
        type: String,
        require:true,
        trim:true,  
    },
},
{
    timestamps: true,
})

const Etapas = mongoose.model("etapas", etapasShema)

export default Etapas