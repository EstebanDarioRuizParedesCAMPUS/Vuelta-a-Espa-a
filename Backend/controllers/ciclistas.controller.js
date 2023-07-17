import Ciclistas from "../modules/ciclistas.js";

const obtenerCiclista = async (req,res) => {
    try {
        const ciclista = await Ciclistas.find()
        res.json(ciclista)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnCiclista = async (req,res) => {
    try {
        const ciclista = await Ciclistas.findOne({_id:req.params.id})
        res.json(ciclista)
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const agregarCiclista = async (req,res) => {
    const ciclista = new Ciclistas(req.body)
    try {
        const nuevoCiclista = await ciclista.save()
        res.json(nuevoCiclista)
    } catch (error) {
        console.log(error);
    }
}

const borrarCiclista = async (req,res) => {
    try {
        await Ciclistas.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const actualizarCiclista = async (req,res) => {
    try {
        const ciclista = await Ciclistas.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(ciclista)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerCiclista,
    obtenerUnCiclista,
    agregarCiclista,
    borrarCiclista,
    actualizarCiclista}