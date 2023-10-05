import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import SBCQ from './SBCQ';
import PBCQ from './PBCQ';
import "../App.css";
import Spinner from './Spinner';
import { useNavigate, useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { toFormData } from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

function Analytics(props) {
    const [newscore, score] = useState(0);
   
    const [newincorrect, incorrect] = useState(0);
    const [newunattemted, unattemted] = useState(0);
    const location = useLocation();
    const host="https://lastmernazurebackend.vercel.app";

    const data = {
        labels: ['Correct', 'Incorrect', 'Not-Attempted'],
        datasets: [
            {
                label: 'Percentage:',
                data: [(newscore / 30) * 100, (newincorrect / 30) * 100, (newunattemted / 30) * 100],
                backgroundColor: [
                    'rgba(95, 251, 95, 0.8)',//Green         
                    'rgba(249, 52, 52, 0.8)',//red
                    'rgba(54, 125, 165, 0.8)',//blue             
                ],

                borderWidth: 2,
            },
        ],
    };

    //this

    const navigate = useNavigate();
    const [checkctype,setcheckctype]=useState(null);
    const [questions, setquestions] = useState(SBCQ());
    const [loading, setloading] = useState(false);
    const [newresult, result] = useState("wait");
    const [userdata, setuserdata] = useState("");
    const Analyticspage = async () => {
        try {
            const res = await fetch(`${host}/about`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "auth-token":localStorage.getItem("JWT"),
                },
                credentials: 'include'
            })

            const data = await res.json();
            setloading(true);
            setuserdata(data);
            score(data.score);
            incorrect(data.incorrect);
            unattemted(30 - (data.score + data.incorrect));
            if (data.score == -1) {
                navigate("/Backtohome");
            }

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            //console.log(err);
            
            navigate("/Login");
            
        }
    }
    useEffect(() => {
        Analyticspage();

    },)




    const prevUrl = useRef('');



    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault(); // Prevents the default back navigation
            navigate('/');
            //console.log('Back button pressed');
            // Add your custom code here
        };

        window.history.pushState(null, null, window.location.pathname); // Adds an initial state to the history

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, []);

    //array is transfer to this page

    const que = PBCQ();
   
   

    useEffect(() => {
       
        if(userdata.ctype=="PBC"){
            //console.log(userdata.ctype);
           
            setcheckctype(false);
            
        }else{
            //console.log(userdata.ctype);
            setcheckctype(true);
        }
       
        
        if (newscore > 15) {
            result("Pass");

        } else {
            result("Fail");
        }

    },);



    return (
        <div>
            {loading ? (
                <>

                    <form method='GET'>
                        <div className='box1'>
                            <div>
                                <Pie className='piec' data={data} />
                            </div>
                            <div className='analyticscss'>
                                <h4 >Score: {newscore}</h4>
                               {/* to fixed() two decimal point */}
                                <h4 className='paddingh4'>
                                    Total Percentage: {((newscore / 30) * 100).toFixed(2)}
                                    %</h4>
                                   
                                <h4 className='paddingh4'>Result: {newresult}</h4>
                                
                                <h4 className='paddingh4'>Correct: {newscore}</h4>
                               
                                <h4 className='paddingh4'>Incorrect: {newincorrect}</h4>
                                <h4 className='paddingh4'>Not-Attempted: {newunattemted}</h4>
                            </div>




                        </div>
                    </form>
                    { checkctype ? (
                    <>
                    <details >
                        <summary className='marginonly' style={{color:"white",
                        backgroundColor:"orange",
        
                       border:"1px solid black",
                       fontWeight:"600", fontSize:"22px",borderRadius:"20px",marginTop:"20px",width:"220px",color:"white" ,padding:"5px"}}>Correct Answers:</summary>
                        <div className='questionlianalytics' >
                    
{questions.map((question, index) => (
    <div
        key={index}
    >

        <p style={{fontSize:"20px",marginTop:"50px"}}>{question.question}</p>
        <p style={{fontSize:"20px"}}>Options:</p>
        <div >
            {question.options.map((option, optionIndex) => (
                <ul className='lianalytics' style={{fontSize:"20px"}}>
                    <label key={optionIndex}>

                        <input className='que-class'
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            checked={questions[index].correctIndex === optionIndex}


                        />
                        {option}

                    </label>
                </ul>


            ))}
        </div>
    </div>
))}
</div>
                    </details>
                    </>):(
                    
                    <>
                    <details >
                        <summary className='marginonly' style={{ fontSize:"25px",border:"1px solid blue",borderRadius:"20px",marginTop:"20px",backgroundColor:"orange",width:"250px",color:"white" }}>Correct Answers:</summary>
                        <div className='questionlianalytics' >
                    
{que.map((question, index) => (
    <div
        key={index}
    >

        <p style={{fontSize:"20px",marginTop:"50px"}}>{question.question}</p>
        <p style={{fontSize:"20px"}}>Options:</p>
        <div >
            {question.options.map((option, optionIndex) => (
                <ul className='lianalytics' style={{fontSize:"20px"}}>
                    <label key={optionIndex}>

                        <input className='que-class'
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            checked={que[index].correctIndex === optionIndex}


                        />
                        {option}

                    </label>
                </ul>


            ))}
        </div>
    </div>
))}
</div>
                    </details>
                    </>)

                    }
                    
                    

                </>

            ) : (
                <Spinner />
            )}
        </div>







    );
}




export default Analytics;
