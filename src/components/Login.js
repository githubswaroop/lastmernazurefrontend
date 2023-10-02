import React,{useContext, useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import loginimage from '../images/loginimage.jpg';
import { Usercontext } from '../App';
import { NavLink } from 'react-router-dom';


function Login() {
  const {state,dispatch}=useContext(Usercontext);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate();
  const host="https://lastmernazurebackend.vercel.app";

  const loginuser=async(e)=>{
    e.preventDefault();
    

    const res=await fetch(`${host}/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      email,password

      })
    });
    const data = await res.json();
    if(res.status === 400 || !data ){
      window.alert("Invalid Credentials");
     
    }else{
      //dispatch call the reducer function
      localStorage.setItem("token",json.token);
      dispatch({type:"USER",payload:true});
      window.alert("success");

      navigate("../");
      
    }
  }
      return (
   
        <>
        <div className='box'>
          <div >
            <form method='POST' >
  
              <h2>Login</h2>
              <div className="form-row" style={{ width: '40vw' }}>

                <br>
                </br>
                <div className="form-group sizeofinput">
                  <label className='fontsizelabel'>Email:</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email" 
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                 />
                </div>
                
                <br>
                </br>
                <div className="form-group sizeofinput">
                  <label className='fontsizelabel'>Password:</label>
                  <input type="password" className="form-control" id="inputPassword" 
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                   placeholder="Password" />
                </div>
              </div>
              <br></br>
  
            
              <button type="submit"
               onClick={loginuser}
               style={{ width: '150px' }}
               className="btn btn-primary">Login </button>
                           <p className="displaysignup">Don't have an Account? <NavLink style={{ textDecoration:"none" }} to="/Signup" >SignUp</NavLink> </p>
            </form>
          </div>
  
          <div  >
            <img src={loginimage} alt=" " className='signupimg' />
          </div>
        </div>
  
  
  
  
  
  
      </>
  );
}

export default Login;
