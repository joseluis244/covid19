const mongoose = require('mongoose');
const Usuario = new mongoose.Schema({
    id:String,     
    name: String,
    password: String,
    fechaCreacion: Date,
    ci_Persona: Number
});

module.exports = mongoose.model('Usuario', Usuario);