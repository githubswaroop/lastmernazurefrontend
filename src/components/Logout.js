import React,{useEffect,useContext} from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { Usercontext } from '../App';


function Logout() {
  
    const location=useLocation();
  localStorage.removeItem("JWT");
  
window.location.replace('/Login');

  return (
   
    <div>
    
    </div>
  );
}

export default Logout;
