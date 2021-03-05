const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const companyAPI = require('../api/companyAPI.js');
const reviewAPI = require('../api/reviewAPI.js');
app.get("/api/companies", companyAPI.getAllCompanies);
app.get("/api/reviews", reviewAPI.getReview);

module.exports = app;
