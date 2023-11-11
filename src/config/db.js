const mongoose = require('mongoose');
const uriLocal = 'mongodb://127.0.0.1:27017/tienda'
const uriRemota = "mongodb+srv://anarebo:yyOwstAR7MVjqOW0@cluster0.xcxw6ee.mongodb.net/";

mongoose.connect(uriRemota);

module.exports = mongoose;