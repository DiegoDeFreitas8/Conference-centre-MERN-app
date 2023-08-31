const mongoose = require('mongoose');

//created my events model
let EventsSchema = mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('events', EventsSchema);