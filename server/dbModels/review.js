var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    company:{
        type: mongoose.Schema.Types.ObjectId,        
        required: true,
        ref: 'Companies'
    },
    category:{
        type: Number,
        required: false
    },
    duration:{
        type: String,
        required: false
    },
    compensation:{
        type: String,
        required: true
    },
    learning: {
        type: Number,
        required: false
    },
    application: {
        type: Number,
        required: false
    },
    experience: {
        type: Number,
        required: false
    },
    culture: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Reviews', ReviewSchema);