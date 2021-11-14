const {Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name : {
        type : String,
        required : true
    },
    img : {
        type : String
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
    description : { type : String },
    UnitPrice : {
        type : Number,
        required : true
    },
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

ProductSchema.methods.toJSON = function(){
    const { __v, state, ...data } = this.toObject();
    return data
}

module.exports =  model("Product", ProductSchema);