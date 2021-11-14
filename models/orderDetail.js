const { Schema, model } = require('mongoose');

const orderDetailSchema = Schema({
  
    combo : {
        type : Schema.Types.ObjectId,
        ref  : 'Combo',
        required : false
    },
    producto : {
        type : Schema.Types.ObjectId,
        ref  : 'Product',
        required : false
    },
    sale : {
        type : Schema.Types.ObjectId,
        ref  : 'Sale',
        required : true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required  : true
    },
    orderState : {
        type : String,
        default : 'PENDIENTE',
        enum : ['PENDIENTE','ENTREGADA','CANCELADA']
    },
    state : {
        type : Boolean,
        default : true,
        required : true
    }
});

orderDetailSchema.methods.toJSON = function() {
    const { __v, state , ...data } = this.toObject();
    return data;  
}

module.exports = model("OrderDetail", orderDetailSchema);