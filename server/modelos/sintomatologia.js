const mongoose = require('mongoose');
const Sintomatologia = new mongoose.Schema({
    //id:String
    fecha: Date,
    descripcion: String,
    ci_Persona: Number,
    id_Sintoma: String
    //otros: String
});

module.exports = mongoose.model('Sintomatologia', Sintomatologia);