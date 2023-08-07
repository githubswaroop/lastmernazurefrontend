import React,{useEffect, useState} from 'react';
import Spinner from './Spinner';


function Topscorer() {
  const [emailArray, setEmailArray] = useState([]);
  const [ctype, setcompanytype] = useState([]);
  const [scored, setscore] = useState([]);
  const [loading,setloading]=useState(false);
  const [documentArray, setDocumentArray] = useState([]);
  const host="https://lastmernapptitude.onrender.com";
  const scoring= async ()=>{
    try {
         const res=await fetch(`${host}/scorer`,{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:'include'
         })
      
      const documents=await res.json();
      setloading(true);
      if(documents){
      
        const email = documents.map((document) => (document.firstname+document.lastname) );
        const score = documents.map((document) => (document.score) );
        const companytype = documents.map((document) => (document.ctype) );
        
     
        setEmailArray(email);
        setscore(score);
        setcompanytype(companytype);
    
        
       
      }
      
    
      const newArray = Array.from({ length: documents.length }, (_, index) => index + 1);
      setDocumentArray(newArray);
      
      console.log(documentArray);
      
     
    
     console.log(emailArray);
      if(!res.status===200){
          const error=new Error(res.error);
          throw error;
      }
      
    }catch(err){
         console.log(err);
        
    }
  }
 useEffect(()=>{

    scoring();
    
 },[])




  
  return (

    <div>
    {loading ? (
    <>
    <table className='boxscorerabove' >
            <tr>
     
         <h4>
          <td className='tablecol noneed' >Ranks</td>
          <td className='tablecolname onlyless' >  Name</td>
          <td className='tablecol noneed2' >Company</td>
          <td className='tablecol  onlyless' > Score</td>
          <td className='tablecol noneed ' >Total Marks</td>
          </h4> 
       


      </tr>
        </table>
    
  {
    
    documentArray.map((num)=>{
        
      return(
        <table >
            <tr className='boxscorer' >
     
         <h4>
         <td className='tablecol noneed' >{num}</td>
          <td className='tablecolname  onlyless' >{emailArray[num-1]}</td>
          <td className='tablecol noneed2 ' >{ctype[num-1]}</td>
          <td className='tablecol  onlyless' >{scored[num-1]}</td>
          <td className='tablecol noneed' >30</td>
          </h4> 
       


      </tr>
        </table>
        


      )
       
        
    }
     
    )
  } 
      




    </>
    ) : (
      <Spinner/>
    )}
  </div>
    


  );
}

export default Topscorer;