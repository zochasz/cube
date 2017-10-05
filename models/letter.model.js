const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({

    title: String,
    from: String,
    to: String,
    text: String,
    author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }

}, {timestamps: true});

const Letter = mongoose.model('Letter', letterSchema);
module.exports = Letter;
