const express=require("express");
const mongoose=require("mongoose")

const router=express.Router()
const AnswerDb=require("../collections/answer");

router.post("/",async(req,res)=>
{
    const answerData=new AnswerDb({
        question_id:req.body.question_id,
        answer:req.body.answer,
        user:req.body.user
    })
    await answerData.save().then((doc)=>
    {
        res.status(201).send({
            status:true,
            data:doc
        }) 
    }).catch((error)=>
    {
        res.status(400).send({

            status:false,
            message:"Error in adding answer"
        })
       
    })
})

module.exports=router;