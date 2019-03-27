const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

const msgModel = mongoose.model('msg', msgSchema);

module.exports = msgModel;