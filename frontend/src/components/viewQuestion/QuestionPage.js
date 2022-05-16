import { Bookmark, History } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import React,{useEffect} from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './QuestionIndex.css'
import parse from 'html-react-parser';
import axios from 'axios'
import { useSelector } from 'react-redux'
import {selectUser} from '../../features/UserSlice'
// import { get } from 'express/lib/request'

function QuestionPage() {

    const [show, setShow] = useState(false);
    const [questionDetails,setQuestionDetails]=useState();
    const[answer,setAnswer]=useState("")
    const[comment,setComment]=useState("")
    const user=useSelector(selectUser);

    let search=window.location.search;
    let params=new URLSearchParams(search)
    const id=params.get("q");

    function QuillOnchange(value)
    {
        setAnswer(value)
    }

    async function buttonOnclick()
    {
        if(answer!=="")
        {
        const body={
            question_id:id,
            answer:answer,
            user:user,
        }
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        await axios.post('https://stackoverflow1-deebika.herokuapp.com/api/answers',body,config)
        .then((res)=>
        {
            console.log(res.data)
            alert("Answer added successfully")
            setAnswer("")
            updatedAnswerDetails();
        })
        .catch((error)=>
        {
            console.log(error)
        })
    }
    }
useEffect(()=>
{
    async function getQuestionDetails()
    {
        await axios.get(`https://stackoverflow1-deebika.herokuapp.com/api/questions/${id}`)
        .then((res)=>
        {
            console.log(res.data[0])
            setQuestionDetails(res.data[0])
        }).catch((error)=>
        {
            console.log(error)
        })
    }
    getQuestionDetails();
    
},[id]);

async function updatedAnswerDetails()
{
    await axios.get(`https://stackoverflow1-deebika.herokuapp.com/api/questions/${id}`)
    .then((res)=>
    {
        console.log(res.data[0])
        setQuestionDetails(res.data[0])
    }).catch((error)=>
    {
        console.log(error)
    })
}

async function commentButtonOnclick()
{
if(comment!=="")
{
    const body={
question_id:id,
comment:comment,
user:user
    }
    await axios.post(`https://stackoverflow1-deebika.herokuapp.com/api/comments/${id}`,body)
    .then((res)=>
    {
        console.log(res.data)
        setComment("")
        setShow(false)
        updatedAnswerDetails()
    })
}
}
let x=String(questionDetails?.title);
let y=String(questionDetails?.body);
    return (
        <div className="questionPage">
            <div className="questionPage_container">
                <div className="questionPage_top">
                    <h2 className="questionPage_question">
                    {parse(x)}</h2>
                    <Link to='/AddQuestion'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='questionPage_description'>
                    <div className="info">
                        <p>{new Date(questionDetails?.created_at).toLocaleString()}</p>
                        <p>Active<span>today</span></p>
                        <p>viewed<span>43 times</span></p>
                    </div>
                </div>

                <div className='all_questions'>
                    <div className="all_questions_container">
                        <div className='all_questions_left'>
                            <div className="all_options">
                                <p className='arrow'>▲</p>
                                <p className='arrow'>0</p>
                                <p className='arrow'>▼</p>
                                <Bookmark />
                                <History/>
                                
                            </div>
                        </div>
                        <div className='question_answer'>
                            <p>{parse(y)}
                            </p>
                            <div className='author'>
                                <small>{new Date(questionDetails?.created_at).toLocaleString()}</small>
                                <div className='author_details'>
                                    <Avatar src={questionDetails?.user?.photo} />
                                    <p>
                                    {questionDetails?.user?.displayName? 
            questionDetails?.user?.displayName
            :String(questionDetails?.user?.email).split('@')[0]}
                                    </p>
                                </div>
                            </div>
                            
                            
                            <div className='comments_container'>
                            <div className="comment">
                                {
                                    questionDetails?.comments&&questionDetails?.comments?.map((comment_e)=>
                                    {
                                        return(  
                                        <p>{comment_e?.comment} -<span>{comment_e?.user?.displayName? 
            comment_e?.user?.displayName
            :String(comment_e?.user?.email).split('@')[0]}</span>
            <small>{new Date(comment_e?.created_at).toLocaleString()} </small></p>
                                    )
                                    })
                                }
                              
</div>
                                <p onClick={() => setShow(!show)}>Add a comment</p>
                                {
                                    show && (<div className="title">
                                        <textarea
                                        value={comment}
                                        onChange={(e)=>setComment(e.target.value)}
                                            type="text"
                                            placeholder='Add your comment...'
                                            rows={5}
                                            style={{
                                                margin: "0px 0px",
                                                padding: "10px",
                                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                                borderRadius: "3px",
                                                outline: "none",
                                            }}
                                        />
                                        <button 
                                        onClick={commentButtonOnclick}>
                                            Add comment</button>
                                    </div>)
                                }
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{
                flexDirection:"column"
            }} className='all_questions'>
            <p style={{
                marginBottom :"20px",
                fontSize:"1.3rem",
                fontWeight:"300"
            }}>{questionDetails?.answerDetails?.length} Answers</p>
            {
                questionDetails?.answerDetails?.map((e)=>
                {
return (<div key={e?._id}
className='all_questions_container'>
            <div className='all_questions_left'>
                        <div className="all_options">
                            <p className='arrow'>▲</p>
                            <p className='arrow'>0</p>
                            <p className='arrow'>▼</p>
                            <Bookmark/>
                            <History/>
                            </div>
                        </div> 
                        <div className='question_answer'>
    <p>{parse(e?.answer)}</p>
    <div className='author'>
        <small>{new Date(e?.created_at).toLocaleString()}</small>
        <div className='author_details'>
            <Avatar src={e?.user?.photo}/>
            <p>{e?.user?.displayName? 
            e?.user?.displayName
            :String(e?.user?.email).split('@')[0]}</p>
        </div>
    </div>
    
</div>
            </div>)
            
                })
}
             </div>

            </div>
         <div className="questionPage_answer"> 
          <h3 style={{
          fontSize:"22px", 
                margin:"10px 0", 
                fontWeight:"400" 
             }}>{questionDetails?.user?.displayName? 
                questionDetails?.user?.displayName
                :String(questionDetails?.user?.email).split('@')[0]}</h3> 
            

             <ReactQuill 
             value={answer}
             onChange={QuillOnchange}
             className='react_quill'
              theme="snow" 
              style={{ height: "150px", }} /> 
          </div>
         <button 
         type="submit"
         onClick={buttonOnclick}
         style={{marginTop:"200px"}}>Post your answer</button>
    </div >
  )
}

export default QuestionPage