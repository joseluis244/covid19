const express = require("express")
const app = express()
const App = require("./App")
const Servicio = require("./Servicio")

app.use("/app",App)
app.use("/serv",Servicio)


app.listen(4000,()=>{
    console.log("servidor Iniciado")
})