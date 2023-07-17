import express  from "express";

const router = express.Router()

import {obtenerEquipo,obtenerUnEquipo,agregarEquipo,borrarEquipo,actualizarEquipo} from "../controllers/equipos.controller.js"

router.get("/all", obtenerEquipo)
router.get("/search/:id", obtenerUnEquipo)
router.post("/add", agregarEquipo)
router.delete("/del/:id", borrarEquipo)
router.patch("/upd/:id", actualizarEquipo)

export default  router