import React,{useEffect,useContext} from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { Usercontext } from '../App';


function Logout() {
  
     
  useEffect(() => {
    const navigate=useNavigate();
    
 

localStorage.removeItem('JWT');

    window.location.href = './Login';

  return (
   
    <div>
    
    </div>
  );
}

export default Logout;
