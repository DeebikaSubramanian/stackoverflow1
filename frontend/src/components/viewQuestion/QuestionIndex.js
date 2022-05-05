import React from 'react'
import Sidebar from '../home/Sidebar'
import QuestionPage from './QuestionPage'
// import './QuestionIndex.css'
import '../home/index.css'


function QuestionIndex() {
  return (
    <div className="home_index">
      <div className='home_index_content'>
        <Sidebar/>
        <QuestionPage/>
        </div> 

    </div>
  )
}

export default QuestionIndex