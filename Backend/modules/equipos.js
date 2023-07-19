import mongoose from "mongoose";

const equiposShema = mongoose.Schema({
    NombreEquipo: {
        type: String,
        require: true,
        unique:true,
    },
    Localidad: {
        type: String,
        require:true,
        trim:true,
    },
    Entrenador :{
        type: String,
        require:true,
        trim:true,  
    },
},
{
    timestamps: true,
})

const Equipos = mongoose.model("equipos", equiposShema)

export default Equipos
