const { model } = require('mongoose')
const mongoose = require('../config/db')
const {Schema} = mongoose

//Estrucura de las colección de usuarios
const usuarioSchema = new Schema({
    nombre:{
        type: String
    },
    apellidos:{
        type: String
    },
    usuario:{
        type: String,
        unique:true
    },
    correo:{
        type: String,
        unique:true
    },
    clave:{
        type: String
    }
})

//Correspondencia de la colección en la BD
const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario;