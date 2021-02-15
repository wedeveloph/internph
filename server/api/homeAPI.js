const express = require('express');
const bodyParser = require('body-parser');

const db = require('../dbModels/db.js');
const assert = require('assert');
const mongo = require('mongodb');

const app = express();

const homeAPI = {
    //  Get reviews
    getReview: async (req, res) =>{

    },
    // Add a review
    addReview: async (req, res) =>{

    }, 
    // Delete a review
    deleteReview: async (req, res) =>{

    }
}


module.exports = homeAPI;









module.exports = app;
