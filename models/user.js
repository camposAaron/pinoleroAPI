const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName : {
        type:  String,
        required: [true, 'The first name is required']
    },
    lastName : {
        type:  String,
        required: [true, 'The lastname  is required']
    },
    userName : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required: [true, 'The password is required'],
    },
    role : {
        type : String,
        required: true,
        default: 'USER_ROLE',
        emun : ['ADMIN_ROLE', 'SUPPORT_ROLE']
    },
    state : {
        type: Boolean,
        default : true
    }
});

UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;  
}

module.exports = model('User', UserSchema);