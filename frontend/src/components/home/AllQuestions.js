import React from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import './allquestions.css';
import parse from 'html-react-parser';


function AllQuestions(props) {

function truncate(str,n)
{
    return str?.length>n?str.substr(0,n-1)+"...":str
}
let tags;
if(props.question?.tags[0]!==undefined)
tags=JSON.parse(props.question?.tags[0]);
else
tags=[]

const truncated=truncate(props.question?.body,200)
  return (
    <div className='all_questions'>
        <div className='all_questions_container'>
            <div className='all_questions_left'>
                <div className='all_options_container'>
                    <div className='all_option'>
                        <p>0</p>
                        <span>Votes</span>
                    </div>

                    <div className='all_option'>
                        <p>{props.question?.answerDetails?.length}</p>
                        <span>Answers</span>
                    </div>
                    

                    <div className='all_option'>
                       <small>0 views</small>
                    </div>
                </div>
                </div>
                <div className='question_answers'>
                        <Link to={`/QuestionPage?q=${props.question?._id}`}>{props.question?.title}
                        </Link>
                        <div style={{width:"90%"}}>
    <div>{parse(truncated)}
    </div>
</div>
<div style={{display:"flex"}}>

    {
       tags.map((e,index)=>
       {
           return (
           <>
           
           <span className='question_tags'>{e}</span>
          
           </>)
       })
    }
    
    </div>

<div className='author'>
    <small>{new Date(props.question.created_at).toLocaleString()}</small>
    <div className='author_details'>
        <Avatar src={props.question?.user?.photo}/>
        <p>{props.question?.user?.displayName? 
            props.question?.user?.displayName
            :String(props.question?.user?.email).split('@')[0]}</p>
    </div>
</div>
        </div>
        </div>
    </div>
  )
}

export default AllQuestions