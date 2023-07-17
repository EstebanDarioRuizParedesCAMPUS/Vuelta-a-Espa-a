import mongoose from "mongoose";

const premiosShema = mongoose.Schema({
    primerLugar: {
        type: String,
        require: true,
        trim:true,
    },
    segundoLugar: {
        type: String,
        require:true,
        trim:true,
    },
    tercerLugar :{
        type: String,
        require:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Premio = mongoose.model("premios", premiosShema)

export default Premio