const msgDetails = require('../controller/controller');
const express = require ('express');
const router = express.Router();
const mongoose = require('../config/config')


router.get('/', (req, res)=>{
    res.status(200).json({
        message:'Hello softnet API'
    })
})

router.post('/hello', msgDetails.getMsg);

module.exports = router;