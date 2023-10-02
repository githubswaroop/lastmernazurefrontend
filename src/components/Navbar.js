import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useLocation } from 'react-router-dom';
import profileimg from '../images/userprofileimg.png';

function Navbar() {

  const [newsam, sam] = useState(0);
  const [firstname,updatedfirstname]=useState("");
  const [lastname,updatedlastname]=useState("");
  const [email,updatedemail]=useState("");
  const location = useLocation();
  const host="https://lastmernazurebackend.vercel.app";
  useEffect(() => {
    // Function to check if the token exists in the cookie
    function checkTokenInCookie() {
      // const cookies = document.cookie.split(';');
      // const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('jwt='));
      const tokenCookie=localStorage.getItem("JWT");

      if (tokenCookie) {
        // Token exists in the cookie
        sam(1);
      } else {
        // Token does not exist in the cookie
        sam(0);
        console.log('Token not found in the cookie.');
      }
    }

    checkTokenInCookie();
  }, [location.pathname]);
   const sendtoken=localStorage.getItem("JWT");
  const homepage = async () => {
    try {
        const res = await fetch(`${host}/about`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
               // "authorization":`${sendtoken}`
              
            },
            credentials: 'include'
        })

        const data = await res.json();
        updatedfirstname(data.firstname);
        updatedlastname(data.lastname);
        updatedemail(data.email);

        if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }

    } catch (err) {
        console.log(err);
        
       
        
    }
}
useEffect(() => {
    homepage();

},)

  const Rendernav = () => {
    if (newsam) {
      return (
        <>
          <li className="nav-item">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className="  hovereffect" aria-current="page" to="/" >Home</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect" to="/Analytics">Analytics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect" to="/Topscorer">Top Scorer</NavLink>
          </li>

          <li className="nav-item">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect" to="/Logout">Logout</NavLink>
          </li>
          
          <div className='profileimg'>
            <div class="dropdown">
            <NavLink class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#" style={{textDecoration:"none",color:"black",marginRight:"-6px",textAlign:"center"}}>{firstname}</NavLink>

            <img src={profileimg}  data-bs-toggle="dropdown"  style={{width:"50px",height:"auto"}} />

            <div class="dropdown-menu"
            style={{width:"200px"}}>
    <li><p style={{paddingLeft:"5px"}}> Name: {firstname} {lastname}</p></li>
    <li><p style={{paddingLeft:"5px",marginTop:"-15px"}}>Email: {email} </p></li>
    
  </div>
            </div>
           
                          
           
              
            
            </div>
         
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item  ">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" hovereffect" to="/Analytics">Analytics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect" to="/Topscorer">Top Scorer</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect" to="/Login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} className=" hovereffect " to="/Signup">SignUp</NavLink>
          </li>

        </>
      )
    }
  }
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary ml-auto    col " style={{ paddingLeft: '15vw', marginleft: 'auto' }}>
      <div className="container-fluid">
        <h1 className="navbar-brand" >Navbar</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 hovereffect" >

            <Rendernav />

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
