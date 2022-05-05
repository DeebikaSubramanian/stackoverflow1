const express=require("express");
const mongoose=require("mongoose")

const router=express.Router()
const CommentDb=require("../collections/comment");
// const { create } = require("../collections/question");

router.post("/:id",async(req,res)=>
{
    try{
        await CommentDb
      .create({
            question_id:req.params.id,
            comment:req.body.comment,
            user:req.body.user
        })
        
        .then((doc)=>
        {
            res.status(201).send({
                status:true,
                message:"Comment added Successfully"
            })
        }).catch(()=>
        {
            res.status(400).send({
                status:false,
                message:"Error while adding comment"
            })
        })
    }catch(error)
    {
        res.status(500).send({
            status:false,
            message:"Error while adding comment2"
        })
    }
})

module.exports=router;