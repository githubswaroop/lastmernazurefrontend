import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


function Backtohome() {
  const navigate=useNavigate();
  function linking(){
    navigate("/");
  }
  return (
    <>
    <div className='backtohomebox' >
    <h2>
        First Give your Test and Then your score is Visible here
    </h2>
    <button className='backtobtn' onClick={()=>linking()}>
        Home Page
    </button>

    </div>
        
 




    </>


  );
}

export default Backtohome;