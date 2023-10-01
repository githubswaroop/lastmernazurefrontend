import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
import signupimage from '../images/signupimage.jpg';
import { NavLink ,useLocation } from 'react-router-dom';

function SignUp() {
const navigate=useNavigate();
const host="https://lastmernazurebackend.vercel.app";
  const [user,setuser]=useState({
      firstname:"",lastname:"",email:"",password:""
  });
 
  let name,value;
  const handleinput=(e)=>{
   name=e.target.name;
   value=e.target.value;
    

   setuser({...user,[name]:value})
  }

  const senddata=async(e)=>{
    e.preventDefault();
    const {firstname,lastname,email,password}=user;
     console.log(firstname);
     console.log(lastname);
     console.log(email);

     const emailvalid=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     console.log(emailvalid.test(email));
     if(!emailvalid.test(email)){
           alert("Invalid Credentials");
     }else{
        
    const res=await fetch(`${host}/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstname,lastname,email,password
      })
    });
     


    const data =await res.json();
    console.log(data);
    if(res.status === 50){
      window.alert("please login you are already sign in");
      navigate("./login");
    }
    if(res.status === 422 || !data ){
      window.alert("Invalid Credentials");
     

    }else{
      window.alert("success");
      localStorage.removeItem('companyapptitude');
      localStorage.removeItem('companyapptitude1');
      navigate("/login");
    }

  }
  }
  return (
    
    <>
      <div className='box'>
        <div >
          <form method='POST'  >

            <h2>Sign Up</h2>
           
            <div className="form-row" style={{ width: '40vw' }}>
              <div>
                <div className="form-group fontsizelabel sizeofinput" >
                  <label className='fontsizelabel'>First Name:</label>
                  <input type="name" name='firstname'  className="form-control inputheight" id="inputfirstname" 
                  placeholder="First Name" 
                  value={user.firstname}
                  onChange={handleinput}
                  maxLength={10}
                  
                  />
                  
                </div>
                <br>
                </br>
                <div className="form-group sizeofinput">
                  <label className='fontsizelabel'>Last Name:</label>
                  <input type="name" name='lastname' className="form-control inputheight" id="inputlastname" placeholder="Last Name"
                   maxLength={8} 
                   value={user.lastname}
                   onChange={handleinput}/>
                </div>
              </div>

              <br>
              </br>
              <div className="form-group sizeofinput">
                <label className='fontsizelabel'>Email:</label>
                <input type="email" name='email' className="form-control inputheight" id="inputEmail" placeholder="Email"  
                 value={user.email}
            
                 onChange={handleinput} />
              </div>
              
              <br>
              </br>
              <div className="form-group sizeofinput">
                <label className='fontsizelabel'>Password:</label>
                <input type="password" name='password' className="form-control inputheight" id="inputPassword" placeholder="Password" 
                 value={user.password}
                 onChange={handleinput}/>
              </div>
            </div>
            <br></br>
            <div  >
            <button type="submit" className="btn btn-primary" style={{ width: '150px' }} onClick={senddata}>Sign Up</button>
            <p className="displaysignup">Already have an Account ? <NavLink style={{ textDecoration:"none" }} to="/login" >login</NavLink> </p>
            </div>
            
            
           
          </form>
        </div>

        <div >
          <img src={signupimage} alt=" " className='signupimg' />

        </div>
      </div>






    </>
  );
}

export default SignUp;
