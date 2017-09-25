const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({

    author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    },
    letters: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Letter'
    }],
    projects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
    }],
    publicID: String,
    title: String

}, {timestamps: true});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
