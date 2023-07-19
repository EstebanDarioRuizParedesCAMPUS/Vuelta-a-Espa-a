import mongoose from "mongoose";

const ciclistasShema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true,'Nombre del ciclista es requierido'],
        trim:true,
    },
    nacionalidad: {
        type: String,
        required: [true,'Nombre del ciclista es requierido'],
        trim:true,
    },
    edad :{
        type: String,
        required: [true,'Nombre del ciclista es requierido'],
        trim:true,  
    },
    logros :{
        type: String,
        require:true,
        trim:true,  
    },
    Equipo :{
        type: String,
        required: [true,'Nombre del ciclista es requierido'],
        trim:true,  
    },

},
{
    timestamps: true,
})

const Ciclistas = mongoose.model("ciclistas", ciclistasShema)

export default Ciclistas