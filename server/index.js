const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const app = express();


//midware
app.use(bp.json());
app.use(cors());
const routes = require(__dirname + '/routes/api');

const port = process.env.PORT || 9000;

app.listen(port, ()=>console.log(`Running on port ${port}`));
