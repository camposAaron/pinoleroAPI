const { Schema, model} = require("mongoose");

const ComboSchema = Schema({
    name : {
        type : String,
        required : true
    },
    img : {
        type : String
    },
    products : [{
        type : Schema.Types.ObjectId,
        ref : 'Product',
        required: true
    }],
    price : {
        type : Number,
        required : true
    },
    description : { type : String },
    user : {
        type :Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    available : { type : Boolean, default : true },
    state : {
        type : Boolean,
        required : true,
        default : true
    }
});

ComboSchema.methods.toJSON = function(){
    const { _v, state, ...data} = this.toObject();
    return data;
}

module.exports = model('Combo', ComboSchema);