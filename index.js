require('dotenv').config();
const router = require('./Router/router')
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cors());
app.use(router);

app.listen(PORT, ()=>{
    console.log('Listening on port 4000');
})