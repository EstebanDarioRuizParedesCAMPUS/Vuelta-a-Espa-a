import mongoose from "mongoose";

const etapasShema = mongoose.Schema({
    participante1: {
        type: String,
        required: [true,'Debe haber al menos 4 participantes por Etapa'],
    },
    participante2: {
        type: String,
        required: [true,'Debe haber al menos 4 participantes por Etapa'],
    },
    participante3: {
        type: String,
        required: [true,'Debe haber al menos 4 participantes por Etapa'],
    },
    participante4: {
        type: String,
        required: [true,'Debe haber al menos 4 participantes por Etapa'],
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