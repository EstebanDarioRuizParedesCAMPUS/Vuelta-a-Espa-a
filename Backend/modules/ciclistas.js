import mongoose from "mongoose";

const ciclistasShema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim:true,
    },
    nacionalidad: {
        type: String,
        require:true,
        trim:true,
    },
    edad :{
        type: String,
        require:true,
        trim:true,  
    },
    logros :{
        type: String,
        require:true,
        trim:true,  
    },

},
{
    timestamps: true,
})

const Ciclistas = mongoose.model("ciclistas", ciclistasShema)

export default Ciclistas