const express=require('express')
const router=express.Router();
const questionRouter=require('./questionRouter')
const answerRouter=require('./answerRouter');
const commentRouter=require('./commentRouter')

router.get('/',(req,res)=>
{
    res.send('Welcome to stackoverflow');
})
router.use('/questions',questionRouter)
router.use('/answers',answerRouter)
router.use('/comments',commentRouter)

module.exports=router;