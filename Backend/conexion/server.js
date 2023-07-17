import express  from "express";
import cors from "cors"
import conectarDB from "./conexion.js";
import Cliclistasrouter from "../routes/ciclistas.routes.js";
import Equposrouter from "../routes/equipos.routes.js";
import Etapasrouter from "../routes/etapas.routes.js";
import Premiosrouter from "../routes/premios.routes.js";
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.api = `/API/values`
        this.midleware()
        this.routes()
    }

    midleware(){
        this.app.use(cors())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(`${this.api}/ciclista`,Cliclistasrouter )
        this.app.use(`${this.api}/equipos`, Equposrouter )
        this.app.use(`${this.api}/etapas`, Etapasrouter )
        this.app.use(`${this.api}/premios`, Premiosrouter)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server is Running in Port ${this.port}`);
        })
    }

    conection(){
        conectarDB()
    }

} 

export default Server
