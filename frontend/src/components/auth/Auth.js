import React, {useState} from 'react';
import "./auth.css"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth,provider} from "../../firebase";
import {useNavigate} from 'react-router-dom'

function Auth()
{
    const [register,setRegister]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const navigate=useNavigate();
    


    function googleSignInOnclick()
    {
        signInWithPopup(auth,provider).then((res)=>
        {
console.log(res);
navigate('/')
        })
    }

    function registerOnclick()
    {
        
    setError("");
    setLoading(false);
    if(email===""||password===""||username==="")
    {
        setError("Must to fill all the fields")
        setLoading(false);
            
    } 
     else {
            console.log("Register")
            createUserWithEmailAndPassword(auth, email, password)
              .then((res) => {
                console.log(res);
                setLoading(false);
                navigate('/')
              })
              .catch((error) => {
                console.log(error);
                setError(error.message);
                setLoading(false);
              });
          }
    }


    const signInOnclick=()=>
    {
        setError("");
        setLoading(true);
        if(email ===""||password==="")
        {
            setError("Must to fill the fields");
            setLoading(false);
            
        }
        else{
            signInWithEmailAndPassword(auth,email,password)
            .then((res)=>
            {
                navigate('/')
                console.log(res);
                setLoading(false);
                

            })
            .catch((error)=>
            {
                console.log(error.code)
                setError(error.message)
                setLoading(false);
            })
        }
    }

    return(
        <div className="Auth">
<div className="auth_container">
    <p className='heading'> Add another way to log in using any of the following services.</p>
    <div className="sign_options">
        <div onClick={googleSignInOnclick} className="google_auth">
            <img src="data:image/png;base64,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"
             alt="google"/>
            <p> Login with Google</p>
        </div>
    </div>
    <div className="auth_login">
        <div className="auth_login_container">
{
    register?(
        <>
    <div className="input_field">
        <p>UserName</p>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
        </div>

        <div className="input_field">
        <p>Email</p>
        <input type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        </div> 

<div className="input_field">
<p>Password</p>
<input type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)} />
</div> 
<button onClick={registerOnclick}
disabled={loading}>
    {loading?"Registering...":"Register"}
</button>
</>
    ):(
    <>
     <div className="input_field">
    <p>Email</p>
    <input type="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
    </div> 

<div className="input_field">
<p>Password</p>
<input type="password"
 value={password}
 onChange={(e)=>setPassword(e.target.value)}/>
</div> 
<button onClick={signInOnclick}
disabled={loading}>
    {loading?"Signing In...":"Login"}
    </button></>
    )
    }
    <p onClick={()=>setRegister(!register)} className='register'>{register? "Login" : "Register?"}</p>
        </div>
    </div>
    {
        error!=="" && (<p style={{
            color:"red",
            fontSize:"14px",
        }}>
            {error}

        </p>)
    }
</div>
        </div>
    )
}
export default Auth;