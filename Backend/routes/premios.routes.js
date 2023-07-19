import express  from "express";
import validateDocument from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router()

import {obtenerPremios,obtenerUnPremio,agregarPremio,borrarPremio,actualizarPremio} from "../controllers/premios.controller.js"

router.get("/all", obtenerPremios)
router.get("/search/:id", obtenerUnPremio)
router.post("/add", agregarPremio)
router.delete("/del/:id", borrarPremio)
router.patch("/upd/:id", actualizarPremio)

export default  router