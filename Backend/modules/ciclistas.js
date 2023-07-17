import mongoose from "mongoose";

const ciclistasShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:true,
    },
    nacionalidad: {
        type: String,
        required:true,
        trim:true,
    },
    edad :{
        type: String,
        required:true,
        trim:true,  
    },
    logros :{
        type: String,
        required:true,
        trim:true,  
    },

},
{
    timestamps: true,
})

const Ciclistas = mongoose.model("ciclistas", ciclistasShema)

export default Ciclistas