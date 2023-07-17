import dotenv from "dotenv"
import Server from "./conexion/server.js"

dotenv.config()

const server = new Server

server.listen()
