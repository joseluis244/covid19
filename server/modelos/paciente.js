const mongoose = require('mongoose');
const Paciente = new mongoose.Schema({
    ciPersona:Number,
    fechaNacimiento: Date,
    peso: Number,
    estatura: Number,
    georeferencia: Number
});

module.exports = mongoose.model('Paciente', Paciente);