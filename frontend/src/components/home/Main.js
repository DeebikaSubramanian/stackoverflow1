import React from 'react'
import {Link} from 'react-router-dom'
import {FilterList} from '@material-ui/icons';
import AllQuestions from './AllQuestions'
import './main.css'

function Main(props) {
  return (
    <div className='main'>
      <div className='main_container'>
        <div className='main_top'>
          <h2>All Questions</h2>
          <Link to='/addQuestion'>
          <button>
            Ask Question
            </button>
            </Link>
        </div>

        <div className="main_description">
          <p>{props.questions && props.questions.length}  Questions</p>
          <div className="main_filter">
            <div className='main_tab_container'>
              <div className='main_tab'>
                <Link to='/'>Newest</Link>
              </div>

              <div className="main_tab">
                <Link to='/'>Active</Link>
              </div>

              <div className='main_tab'>
                <Link to='/'>More</Link>
              </div>
              </div>


              <div className='main_filter_item'>
                <FilterList/>
                <p>Filter</p>
              </div>
            </div>
          </div>
<div className="question_container">
  {
    props.questions.map((e,index)=>
    {
     return( 
<>
{console.log(e.title)}
<div className='question'>
  <AllQuestions question={e} key={index}/>
  </div>
</>)
    })
  }
 
  </div>
     </div>
    </div>
  )
}

export default Main