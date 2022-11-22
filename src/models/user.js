const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('users', userSchema);

module.exports = User;