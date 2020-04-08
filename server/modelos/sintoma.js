const mongoose = require('mongoose');
const Sintoma = new mongoose.Schema({
    //id:String
    nombre: String,
    descripcion: String
    //otros: String
});

module.exports = mongoose.model('Sintoma', Sintoma);