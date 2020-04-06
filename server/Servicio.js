const express = require("express")
const Router = express.Router()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/covid19', {useNewUrlParser: true});

Router.get("/initdb",(req,res)=>{
    res.send("Listo")
})

module.exports = Router