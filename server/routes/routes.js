const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const companyAPI = require('../api/companyAPI.js');
app.get("/", companyAPI.getAllCompanies);

module.exports = app;
