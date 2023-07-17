import Etapas from "../modules/etapas.js"

const obtenerEtapa = async (req,res) => {
    try {
        const etapa = await Etapas.find()
        res.json(etapa)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnaEtapa = async (req,res) => {
    try {
        const etapa = await Etapas.findOne({_id:req.params.id})
        res.json(etapa)
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const agregarEtapa = async (req,res) => {
    const etapa = new Etapas(req.body)
    try {
        const nuevaetapa = await etapa.save()
        res.json(nuevaetapa)
    } catch (error) {
        console.log(error);
    }
}

const borrarEtapa = async (req,res) => {
    try {
        await Etapas.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const actualizarEtapa = async (req,res) => {
    try {
        const etapa = await Etapas.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(etapa)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerEtapa,obtenerUnaEtapa,agregarEtapa,borrarEtapa,actualizarEtapa}