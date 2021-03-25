var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
        },
    shortbio:{
        type: String,
        required: false
    },
    longbio:{
        type: String,
        required: false
    },
    website:{
        type: String,
        required: true
    },
    sector: {
        type: Array,
        required: false
    },
    logo: {
        type: String,
        required: false
    },
    mapValue: {
        type: String,
        required: false
    },
    payValue: {
        type: String,
        required: false
    },
    timeValue: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Companies', CompanySchema);