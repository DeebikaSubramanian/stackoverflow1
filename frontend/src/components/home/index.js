import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import './index.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
function Index() {

const [questions,setQuestions]=useState([]);
useEffect(()=>
{
async function getQuestion()
{
await axios.get('/api/questions')
.then((res)=>
{
  console.log(res.data)
  setQuestions(res.data.reverse())
})
.catch((error)=>
{
  console.log(error)
})
}
getQuestion();
},[])

  return (
    <div className="home_index">
      <div className='home_index_content'>
        <Sidebar/>
        <Main questions={questions}/>
        </div> 

    </div>
  )
}

export default Index