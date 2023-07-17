import mongoose from "mongoose";

const premiosShema = mongoose.Schema({
    primerLugar: {
        type: String,
        required: true,
        trim:true,
    },
    segundoLugar: {
        type: String,
        required:true,
        trim:true,
    },
    tercerLugar :{
        type: String,
        required:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Premio = mongoose.model("premios", premiosShema)

export default Premio