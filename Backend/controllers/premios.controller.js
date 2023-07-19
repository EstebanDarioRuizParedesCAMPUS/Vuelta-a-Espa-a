import Premios from "../modules/premios.js"
import bcryptjs from "bcryptjs"

const obtenerPremios = async (req,res) => {
    try {
        const premios = await Premios.find()
        res.json(premios)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnPremio = async (req,res) => {
    try {
        const premios = await Premios.findOne({_id:req.params.id})
        res.json(premios)
    } catch (error) {
        res.status(404)
        res.send({error:"Premio no existe"})
        console.log(error);
    }
}

const agregarPremio = async (req,res) => {
    const premios = new Premios(req.body)
    try {
        const nuevopremio = await premios.save()
        res.json(nuevopremio)
    } catch (error) {
        console.log(error);
    }
}

const borrarPremio = async (req,res) => {
    try {
        await Premios.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Premio no existe"})
        console.log(error);
    }
}

const actualizarPremio = async (req,res) => {
    try {
        const premios = await Premios.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(premios)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerPremios,obtenerUnPremio,agregarPremio,borrarPremio,actualizarPremio}