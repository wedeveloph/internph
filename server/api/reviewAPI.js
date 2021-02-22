const express = require('express');
const bodyParser = require('body-parser');

const db = require('../dbModels/_db.js');
const Company = require('../dbModels/company.js');
const Review = require('../dbModels/review.js');

const assert = require('assert');
const mongo = require('mongodb');

const app = express();

const reviewAPI = {
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


module.exports = reviewAPI;
