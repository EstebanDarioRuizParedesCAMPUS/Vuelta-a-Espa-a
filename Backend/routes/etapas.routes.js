import express  from "express";
import validateDocument from "../middleware/validate.js";
import { check } from "express-validator";


const router = express.Router()

import {obtenerEtapa,obtenerUnaEtapa,agregarEtapa,borrarEtapa,actualizarEtapa} from "../controllers/etapas.controller.js"

router.get("/all", obtenerEtapa)
router.get("/search/:id", obtenerUnaEtapa)
router.post("/add", agregarEtapa)
router.delete("/del/:id", borrarEtapa)
router.patch("/upd/:id", actualizarEtapa)

export default  router