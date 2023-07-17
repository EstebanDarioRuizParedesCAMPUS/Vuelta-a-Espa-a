import express  from "express";

const router = express.Router()

import {obtenerCiclista,obtenerUnCiclista,agregarCiclista,borrarCiclista,actualizarCiclista} from "../controllers/ciclistas.controller.js"

router.get("/all", obtenerCiclista)
router.get("/search/:id", obtenerUnCiclista)
router.post("/add", agregarCiclista)
router.delete("/del/:id", borrarCiclista)
router.patch("/upd/:id", actualizarCiclista)

export default  router