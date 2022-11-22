const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const dataSchema = new Schema({
    reason: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    }
});

const Data = mongoose.model('data', dataSchema);
module.exports = Data;