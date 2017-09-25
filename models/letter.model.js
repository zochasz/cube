const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({

    from: String,
    to: String,
    title: String,
    text: String,
    author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    },
    title: String

}, {timestamps: true});

const Letter = mongoose.model('Letter', letterSchema);
module.exports = Letter;
