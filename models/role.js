const { Schema, model } = require('mongoose');

const SchemaRole =  Schema({
    role : {
        type : String,
        required : [true, 'El rol es obligatorio']
    },
    state: {type : Boolean}
})

module.exports = model("Rol", SchemaRole);