const validator = require('email-validator');
const msgsModel = require('../Model/model')

class msgController{
    getMsg(req, res){
        if(!req.body.name){
            return res.status(400).send({
                error: true,
                code: 400,
                success: 'failed',
                message: 'Input name'
            });
        }

        if(req.body.name.toString().trim() === ""){
            return res.status(400).send({
                error: true,
                code: 400,
                success: 'failed',
                message: 'Empty spaces not allowed'
            })
        }
        if(!req.body.email){
            return res.status(400).send({
                error: true,
                code: 400,
                success: 'failed',
                message: 'Input email'
            });
        }
        if( validator.validate(req.body.email) != true){
            return res.status(400).send({
                error: true,
                code: 400,
                success: 'failed',
                message: 'email is not correct'
            });
        }
        if(!req.body.message){
            return res.status(400).send({
                error: true,
                code: 400,
                success: 'failed',
                message: 'Input your message'
            });
        
        }
        if(req.body.message.toString().trim() === ""){
            return res.status(400).send({
                error: true,
                code: 400,
                success: 'failed',
                message: 'Empty spaces not allowed'
            })
        }
        msgsModel.create( {
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
        }).then ((resp)=>{
            console.log("message sent succesfully");
            return res.status(201).send({
                error: false,
                code: 201,
                message:"message sent succesfully" 
            })
        }).catch((err)=>{
            console.log("message not sent", err);
        })

    }
}
const msgDetails = new msgController();
module.exports = msgDetails;