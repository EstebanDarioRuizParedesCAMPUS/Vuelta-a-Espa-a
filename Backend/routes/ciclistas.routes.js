import express  from "express";
import validateDocument from "../middleware/validate.js";
import { check } from "express-validator";
import Equipos from "../modules/equipos.js";

const router = express.Router()

import {obtenerCiclista,obtenerUnCiclista,agregarCiclista,borrarCiclista,actualizarCiclista} from "../controllers/ciclistas.controller.js"

router.get("/all", obtenerCiclista)
router.get("/search/:id", obtenerUnCiclista)
router.post("/add", [
    check('nombre','El nombre del ciclista no es valido').not().isEmpty(),
    check('nacionalidad','La nacionalidad del ciclista no es valido').not().isEmpty(),
    check('edad','La edad del ciclista no es valido').not().isEmpty(),
    check('Equipo').custom(async(NombreEquipo = '')=>{
        const existeEquipo = await Equipos.findOne({NombreEquipo})
        if(!existeEquipo){
            throw new Error(`El Equipo ${NombreEquipo} no está registrado en la base de datos`)
        }
    }),
    validateDocument
],agregarCiclista)
router.delete("/del/:id", borrarCiclista)
router.patch("/upd/:id", actualizarCiclista)

export default  router