require('dotenv').config();
const router = require('./Router/router')
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cors());
app.use(router);

app.listen(port, ()=>{
    console.log('Listening on port 4000');
})