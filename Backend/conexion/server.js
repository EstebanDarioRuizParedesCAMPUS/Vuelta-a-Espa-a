import express  from "express";
import cors from "cors"

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
        this.app.use(`${this.api}/ciclista`, )
        this.app.use(`${this.api}/equipos`, )
        this.app.use(`${this.api}/etapas`, )
        this.app.use(`${this.api}/premios`, )
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server is Running in Port ${this.port}`);
        })
    }

} 

export default Server
