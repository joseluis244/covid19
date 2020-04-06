const mongoose = require('mongoose');
const Usuarios = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Usuarios', Usuarios);