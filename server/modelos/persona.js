const mongoose = require('mongoose');
const Persona = new mongoose.Schema({
    ci:Number,
    name: String,
    apMaterno: String,
    apPaterno: String,
    email: String,
    direccion: String,
    telefonoRef: String
});

module.exports = mongoose.model('Persona', Persona);