const express = require('express');
const bodyParser = require('body-parser');

const db = require('../dbModels/_db.js');
const Company = require('../dbModels/company.js');
const Review = require('../dbModels/review.js');

const assert = require('assert');
const mongo = require('mongodb');

const app = express();

const companyAPI = {
    //  Get all companies in the collection
    getAllCompanies:  (req, res) =>{
        projection = 'name shortbio longbio website logo payValue mapValue timeValue';

         db.findMany(Company, {}, projection, (compRes)=>{
             console.log(compRes);
             res.send(compRes);
        });
    },
    // Get a company in the collection,
    getCompany: async (req, res) =>{

    },
    // Add a company
    addCompany: async (req, res) =>{

    }, 
    // Delete a company
    deleteCompany: async (req, res) =>{

    }
}


module.exports = companyAPI;
