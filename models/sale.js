
const { Schema, model} = require('mongoose');

const SaleSchema = Schema({
    date   : {type : Date, default: new Date()},
    user   : {type : Schema.Types.ObjectId,  ref : 'User', required : true},
    Ntable : {type : number, required : false},
    total  : {type : number},
    state  : {type : boolean, default : true}
})

SaleSchema.methods.toJSON = function() {
    const { __v, state, ...data} = this.toObject();
    return data;
}

module.exports = model('Sale', SaleSchema);