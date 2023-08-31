const mongoose = require('mongoose');

//created my login model 
let LoginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('logins', LoginSchema);