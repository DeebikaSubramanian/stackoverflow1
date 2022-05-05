import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {TagsInput} from 'react-tag-input-component'
import './addQuestion.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/UserSlice'
import axios from 'axios';

function AddQuestion() {

const user=useSelector(selectUser)

const [loading,setLoading]=useState(false);

    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [tags,setTags]=useState([])

    const navigate=useNavigate()

    function QuillOnchange(value)
    {
        setBody(value)
    }

    async function buttonOnclick(e)
    {
        e.preventDefault();

        if(title!=="" && body !=="")
          {
              setLoading(true)
            const bodyJSON={
               title:title,
                body:body,
                tags:JSON.stringify(tags),
                user:user,
            };
            await axios
            .post("/api/questions", bodyJSON)
            .then((res) => {
                alert("Question added successfully")
                setLoading(false)
                navigate('/')
            }).catch((error)=>
            {
                console.log(error)
                setLoading(false)
            })
        }
    }

    return (
        <div className='addQuestion'>
            <div className='addQuestion_container'>
                <div className='header_title'>
                    <h1>Ask a public question</h1>
                </div>
                <div className='question_container'>
                    <div className='question_option_container'>
                        <div className='question_option'>
                            <div className="title">
                                <h3>Title</h3>
                                <small>Be specific and imaging you're
                                    asking a question to another person
                                </small>
                                <input value={title} 
                                onChange={(e)=>setTitle(e.target.value)} 
                                type="text" placeholder="Add question title" />
                            </div>
                        </div>

                        <div className="question_option">
                            <div className="title">
                                <h3>Body</h3>
                                <small>include all the information someone
                                    would need to answer your question
                                </small>
                             <ReactQuill value= {body} onChange={QuillOnchange} />
                            </div>
                        </div>

                        <div className="question_option">
                        <div className="title">
                                <h3>Tags</h3>
                                <small>Add up to 5 tags to describe what your question is about
                                </small>
                <TagsInput name="tags"
                value={tags}
                onChange={setTags}
                 placeHolder='press enter to add new tag'
                 className="tagsinput" />
                            </div>
                        </div>

                    </div>
                </div>
                <button 
                type="submit"
                onClick={buttonOnclick}
                disabled={loading}
                className="button">
                {loading?"Adding Question...":"Add your question"}    
                </button>
                
            </div>

        </div>
    )
}

export default AddQuestion