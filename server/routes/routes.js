const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const homeAPI = require('../api/homeAPI.js');
app.get("/", homeAPI);
module.exports = app;
