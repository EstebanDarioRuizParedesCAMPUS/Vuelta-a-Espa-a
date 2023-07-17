import mongoose from "mongoose";

const equiposShema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        trim:true,
    },
    Localidad: {
        type: String,
        required:true,
        trim:true,
    },
    Entrenador :{
        type: String,
        required:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Equipos = mongoose.model("equipos", equiposShema)

export default Equipos
