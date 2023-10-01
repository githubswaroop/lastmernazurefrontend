import React, { useRef, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import comp from '../images/comp.png';
import Accenture from '../images/Accenture.jpg';
import amazon from '../images/amazon.png';
import infosys from '../images/Infosys.png';
import microsoft from '../images/microsoft.png';
import samsung from '../images/samsung.png';
import goldman from '../images/goldman.png';
import analytics from '../images/analytics.png';
import question from '../images/question.png';
import cardimage from '../images/cardimage.png';

import '../App.css';




function Home() {
 const [check,setcheck]=useState(0);
  const navigate=useNavigate();
  const host="https://lastmernazurebackend.vercel.app";
//checking for SBCQ
    const FullSc=async ()=>{
      try {
           const res=await fetch(`${host}/about`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'include'
           })
        
           const data=await res.json();
          
           console.log(data.examstatus[0]);
         ;
         navigate('./SBCT');

          //  if(data.examstatus[0]){
          //   alert("you have already given this test try another");
            
          //  }else{ 
          //   alert("Dont Click on the Escape Button It will Gonna Close the Exam");
          //   navigate('./SBCT');
          //  }
         
          
        
       

        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
        
      }catch(err){
           console.log(err);
           navigate("/Login");
      }
    }
    

    //for PCBQ
    const FullSc2=async ()=>{
      try {
           const res=await fetch('/about',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'include'
           })
        
           const data=await res.json();
                      
           navigate('./PBCT');
          //  if(data.examstatus[1]){
          //   alert("you have already given this test try another");           
          //  }else{ 
          //   alert("Dont Click on the Escape Button It will Gonna Close the Exam");
          //   navigate('./PBCT');
          //  }
        
       

        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
        
      }catch(err){
           console.log(err);
           navigate("/Login");
      }
    }
    const ref=useRef(null);
    //using ref for scroll to test
   const gototest=()=>{
    console.log("this");
    ref.current?.scrollIntoView({behavior:'smooth'});
    
   }
  
  
  return (
    
    <>
    

      <div className='backgroundimg'>
        <div className='display  ' >
          <div style={{ display: 'flex-box' }}>
            <h1 className='fonth1' style={{ color: "white" }}>Welcome to Website<br></br> Prepare with confidence</h1>

            <h5 className='fonth1' style={{ color: "rgba(255, 255, 255, 0.526)" }}>Apptitude practice exam to prepare <br></br>you for your placements</h5>
            <br></br>
            <button type='button' className='homebtn' onClick={()=>gototest()}>Test your Knowledge</button>
          </div>

          <img src={comp} alt=" " className='compimg' />

        </div>



      </div>
      <br></br>
      <div>
        <h5 style={{ textAlign: 'center' }}>
          Test include Apptitude questions of following companies
        </h5>
        <div className='displayimg'>
          <div>
          <img src={microsoft} alt=" " className='companyfirst' />
          <img src={amazon} alt=" " className='companyimg' />
          <img src={goldman} alt=" " className='companyimg '/>
          </div>
         
          <div>
          <img src={Accenture} alt=" " className='companyimg ' />
          <img src={infosys} alt=" " className='companyimg ' />
          <img src={samsung} alt=" " className='companyimg' />
          </div>
  

          
          




        </div>
        <hr></hr>
        <div >
          <h3 className='cardinfo '>what we offer</h3>
          <div className='cardinfo '>
            <div className="card cardcontrol" >
              <div className="card-body">
                <img src={cardimage} alt=" " className='cardimage' />
                <h5 className="card-title">Live Tests</h5>
                <p className="card-text">Choose Exam which you want to give i.e. Apptitude exam for Service Based company or Product Based Company</p>

              </div>
            </div >

            <div className="card cardcontrol" >
              <div className="card-body">
                <img src={question} alt=" " className='cardimage' />
                <h5 className="card-title">High Yeild Questions</h5>
                <p className="card-text">Questions given are choosen which were already came in different companies tests which help to practice for your placements</p>

              </div>
            </div>

            <div className="card cardcontrol" >
              <div className="card-body">
                <img src={analytics} alt=" " className='cardimage' />
                <h5 className="card-title">Answers</h5>

                <p className="card-text">Answers of all the question will given when you complete the test which help you to find your mistakes </p>

              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div>
          <h3 style={{marginLeft:'15vw'}}>Check your Apptitude Knowledge </h3>
        </div>

        <div ref={ref}>
          <div className="row cardinfo " >
            <div className="col-sm-6 mb-3 mb-sm-0 cardforwid ">
              <div className="card cardbg" >
                <div className="card-body">
                  <h5 className="card-title">Service Based Companies</h5>
                  <p className="card-text">Apptitude questions asked in service based companies<br>
                  </br>
                  No. of Questions:30<br>
                  </br>
                  Time:1 hour</p>
                  <button type='button' onClick={()=>FullSc()} 
                       className="btn btn-primary" style={{
                        color:"white",
                        backgroundColor:"orange",
                        borderRadius:"20px",
                       border:"1px solid black",
                       fontWeight:"600",
                       }} >Start Test</button>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6 cardforwid">
              <div className="card cardbg" >
                <div className="card-body">
                  <h5 className="card-title">Product Based Companies</h5>
                  <p className="card-text">Apptitude questions asked in product based companies<br>
                  </br>
                  No. of Questions:30<br>
                  </br>
                  Time:1 hour</p>
                  <button type='button'style={{
                        color:"white",
                        backgroundColor:"orange",
                        borderRadius:"20px",
                       border:"1px solid black",
                       fontWeight:"600",
                       }} onClick={()=>FullSc2() } className="btn btn-primary">Start Test</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        


      </div>

    


    

    </>

  );
}

export default Home;
