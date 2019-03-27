const msgDetails = require('../controller/controller');
const express = require ('express');
const router = express.Router();
const mongoose = require('../config/config')


router.post('/hello', msgDetails.getMsg);

module.exports = router;