const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes.js');
const db = require('./dbModels/_db.js');

const app = express();


//midware
app.use(bp.json());
app.use(cors());


app.use('/', routes);
db.connect();

const port = process.env.PORT || 9000;

app.listen(port, ()=>console.log(`Running on port ${port}`));
