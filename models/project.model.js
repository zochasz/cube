const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        required: 'The title is required'
    },
    author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    },
    start: Date,
    end: Date,
    surface: Number,
    budget: Number,
    externalEngineer: [String],
    client: String,
    description: String,
    location: String
}, {timestamps: true});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
