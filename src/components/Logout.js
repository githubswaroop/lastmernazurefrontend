import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../App';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the 'JWT' variable from local storage
    localStorage.removeItem('JWT');

    // Navigate to the home page and replace the current page in the history
    navigate('../', { replace: true });
  }, []); // Empty  array to ensure the effect runs once

  return (
    <div>
     
    </div>
  );
}

export default Logout;
