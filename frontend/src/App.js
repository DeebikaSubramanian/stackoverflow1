import React, { Component, useEffect } from 'react';
import Header from './components/header/Header'
import './App.css';
import {BrowserRouter,Router,Routes,Route,Redirect} from 'react-router-dom'
import Index from './components/home/index'
import QuestionIndex from './components/viewQuestion/QuestionIndex'
import AddQuestion from './components/addQuestion/AddQuestion'
import Auth from './components/auth/Auth'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {auth} from "./firebase"
import {login,logout,selectUser} from "./features/UserSlice"
import {useNavigate} from 'react-router-dom'
import {Navigate,Outlet} from 'react-router-dom'
import Profile from './components/header/Profile'


function App() {

  const user=useSelector(selectUser);
  // const dispatch=useDispatch(); 
  // const navigate=useNavigate();

  // useEffect(()=>
  // {
  //   auth.onAuthStateChanged((authUser)=>
  //   {
  //     if(authUser)
  //     {
  //       dispatch(login({
  //         uid:authUser.uid,
  //         photo:authUser.photoURL,
  //         displayName:authUser.displayName,
  //         email:authUser.email,
  //       }))
  //     }
  //     else{
  //       dispatch(logout());
  //     }
  //   })
  // },[dispatch]);

  // function PrivateRoute({ children }) {
  //   // const auth = useAuth();
  //   console.log(auth)
  //   return auth ? children : <Navigate to="/auth" />;
  // }
  return (
    <BrowserRouter>
    <div>

     <Header/>
     <Routes>
       <Route path='/Auth' element={<Auth/>}/>
       <Route path='/AddQuestion' element={<AddQuestion/>}/>
     <Route path='/QuestionPage' element={<QuestionIndex/>}/>
       <Route path='/' element={<Index></Index>}/>
       <Route path='/Profile' element={<Profile></Profile>}/>

      
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
