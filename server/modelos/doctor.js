const mongoose = require('mongoose');
const Doctor = new mongoose.Schema({
    ciPersona:Number,
    especialidad: String,
    centroMedico: String
    //otros: String
});

module.exports = mongoose.model('Doctor', Doctor);