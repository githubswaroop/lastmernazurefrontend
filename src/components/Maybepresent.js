import React,{useState,useEffect} from 'react';
import { Location, useLocation } from 'react-router-dom';


function Maybepresent({children}) {
 const location=useLocation();
 const [shownavbar,setshownavbar]=useState(false);
  
 useEffect(() => {
    // Update the document title using the browser API
    //console.log(location.pathname);
    if(location.pathname==='/SBCT' || location.pathname==='/PBCT'){
     setshownavbar(false);
    }else{
        setshownavbar(true);
    }
    
  });
 return (
   
    <div>{shownavbar && children}</div>
  );
}

export default Maybepresent;
