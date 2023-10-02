import React,{useEffect,useContext} from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { Usercontext } from '../App';


function Logout() {
  const navigate=useNavigate();
    const location=useLocation();
  localStorage.removeItem("JWT");
  navigate('/Login');
  // const {state,dispatch}=useContext(Usercontext);
// const navigate=useNavigate();
//    useEffect(()=>{
//     fetch("/logout",{
//         method:"GET",
//         headers:{
//           Accept:"application/json",
//           "Content-Type":"application/json"
//         },
//         credentials:'include'
//       }).then((res)=>{
//         //  dispatch({type:"USER",payload:false});
//          navigate('../',{replace:true});
//          if(res.status!==200){
//           console.log("error frommmmmmmmmmmmm logout")
//            const error=new Error(res.error);
//            throw error;
//          }
          
            
         

//       }).catch((err)=>{
        
//            console.log(err);
//       })
//    })
  return (
   
    <div>
    
    </div>
  );
}

export default Logout;
