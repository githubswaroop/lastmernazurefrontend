import React,{useEffect,useContext} from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { Usercontext } from '../App';


function Logout() {
  
     
  useEffect(() => {
    const handleBackButton = (event) => {
        event.preventDefault(); // Prevents the default back navigation
        navigate('/');
        console.log('Back button pressed');
       
    };

    window.history.pushState(null, null, window.location.pathname); // Adds an initial state to the history

    window.addEventListener('popstate', handleBackButton);

    return () => {
        window.removeEventListener('popstate', handleBackButton);
    };
}, []);
 
const navigate=useNavigate();
localStorage.removeItem('JWT');

    window.location.href = './Login';

  return (
   
    <div>
    
    </div>
  );
}

export default Logout;
