import Equipos from "../modules/equipos.js"

const obtenerEquipo = async (req,res) => {
    try {
        const equipo = await Equipos.find()
        res.json(equipo)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnEquipo = async (req,res) => {
    try {
        const equipo = await Equipos.findOne({_id:req.params.id})
        res.json(equipo)
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const agregarEquipo = async (req,res) => {
    const equipo = new Equipos(req.body)
    try {
        const nuevaequipo = await equipo.save()
        res.json(nuevaequipo)
    } catch (error) {
        console.log(error);
    }
}

const borrarEquipo = async (req,res) => {
    try {
        await Equipos.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Acción no existe"})
        console.log(error);
    }
}

const actualizarEquipo = async (req,res) => {
    try {
        const equipo = await Equipos.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(equipo)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerEquipo,obtenerUnEquipo,agregarEquipo,borrarEquipo,actualizarEquipo}

