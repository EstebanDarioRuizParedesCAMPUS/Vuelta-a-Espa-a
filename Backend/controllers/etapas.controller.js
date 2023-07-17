import Etapas from "../modules/etapas.js"

const obtenerAcciones = async (req,res) => {
    try {
        const acciones = await Acciones.find()
        res.json(acciones)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnaAccion = async (req,res) => {
    try {
        const accion = await Acciones.findOne({_id:req.params.id})
        res.json(accion)
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const agregarAccion = async (req,res) => {
    const accion = new Acciones(req.body)
    try {
        const nuevaAccion = await accion.save()
        res.json(nuevaAccion)
    } catch (error) {
        console.log(error);
    }
}

const borrarAccion = async (req,res) => {
    try {
        await Acciones.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const actualizarAccion = async (req,res) => {
    try {
        const accion = await Acciones.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(accion)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerAcciones,
    obtenerUnaAccion,
    agregarAccion,
    borrarAccion,
    actualizarAccion}