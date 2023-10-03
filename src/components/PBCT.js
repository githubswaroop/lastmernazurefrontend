import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import questions from './PBCQ';
import PBCQ from './PBCQ';
import '../App.css';
import axios from 'axios';




function PBCT() {
    //timer code start
    const initialTimeLeft = localStorage.getItem('timeLeft') || 60 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
    const [isRunning, setIsRunning] = useState(true);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
    const [selectedButtoncolor, setSelectedButtoncolor] = useState(0);
    const host="https://lastmernazurebackend.vercel.app";


    useEffect(() => {
        if (isRunning) {
            const intervalId = setInterval(() => {
                setTimeLeft(prevTime => {
                    const newTime = prevTime - 1;
                    localStorage.setItem('timeLeft', newTime);
                    if (newTime === 0) {

                        navigate('/Analytics');
                        localStorage.setItem('timeLeft', 60 * 60);
                        setIsRunning(false);
                        setTimeLeft(60 * 60);
                    }
                    return newTime;
                });
            }, 1000);


            return () => clearInterval(intervalId);
        }
    }, [isRunning]);

    useEffect(() => {
        const handleBeforeUnload = e => {
            e.preventDefault();
            e.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);



    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    //timer code end 
    const intialQuestions = PBCQ().map(question =>({...question,isSolved:false}));
    const [questions,setQuestions]=useState(intialQuestions);


    const [finalans, setfinalans] = useState([]);
    const [istoggled, setistoggled] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);


    const navigate = useNavigate();
    //for full screen
    const [isFullScreen, setIsFullScreen] = useState(false);
    //disable back button funtionlity
    useEffect(() => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
            setistoggled(true);
        }
        const backbt = () => {
            window.history.pushState(null, null, window.location.href);
            window.onpopstate = () => {
                window.history.pushState(null, null, window.location.href);
            };
        };

        backbt();
        return () => {
            window.onpopstate = null;
        };
    }, []);

    //end

    const [oldscore, newscore] = useState(-1);




    const exitFullScreen = async (e) => {
        e.preventDefault();
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].correctIndex) {
                score++;
            }
        }
        let unattemted = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] == -1) {
                unattemted++;
            }


        }
        const incorrect = (30 - (unattemted + score));
        const ctype = "PBC";
        console.log(unattemted);
        newscore(score);
        const check = "PBC";

        axios.post(`${host}/api/scoring`, { score, incorrect, ctype, check },{
            headers:{
                "auth-token":localStorage.getItem("JWT")
            }
        })
            .then((res) => {
                console.log("patanahi yaar" + res);
            }).catch(err => console.log("kuch karna padega" + err))


        //code for timer
        localStorage.setItem('timeLeft', 60 * 60);
        setIsRunning(false);
        setTimeLeft(60 * 60);

        if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullScreen(false);
            setistoggled(false);
            const id = 5;
            //redirect to Analytics
            navigate('/Analytics');
        }
    };

    useEffect(() => {
        const handleFullScreenChange = () => {
            if (!document.fullscreenElement) {
                setIsFullScreen(false);
                //after exit code
                let score = 0;
                for (let i = 0; i < questions.length; i++) {
                    if (answers[i] === questions[i].correctIndex) {
                        score++;
                    }
                }
                let unattemted = 0;
                for (let i = 0; i < questions.length; i++) {
                    if (answers[i] == -1) {
                        unattemted++;
                    }


                }
                const incorrect = (30 - (unattemted + score));
                const ctype = "PBC";
                console.log(unattemted);
                newscore(score);
                const check = "PBC";

                axios.post(`${host}/api/scoring`, { score, incorrect, ctype, check })
                    .then((res) => {
                        console.log("patanahi yaar" + res);
                    }).catch(err => console.log("kuch karna padega" + err))


                //code for timer
                localStorage.setItem('timeLeft', 60 * 60);
                setIsRunning(false);
                setTimeLeft(60 * 60);

                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    setIsFullScreen(false);
                    setistoggled(false);
                    const id = 5;
                    //redirect to Analytics
                    navigate('/Analytics');
                }

            }
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, []);
    //till this




    const scrollToQuestion = (questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.ref.current) {
            question.ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleButtonClick = (questionIndex) => {
        setActiveQuestion(questionIndex);
        scrollToQuestion(questionIndex);
        setSelectedButtonIndex(questionIndex);

    };
    const [solved,newsolve]=useState(-1);
    const [selectedOption, setSelectedOption] = useState('');
    const [answers, setAnswers] = useState(Array(questions.length).fill(-1));
    const handleOptionSelect = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
        newsolve(optionIndex);

        const newQuestions=[...questions];
        newQuestions[questionIndex].isSolved=true;
        setQuestions(newQuestions);



    };


    const handlePreviousClick = () => {
        const previousQuestion = activeQuestion - 1;
        if (previousQuestion >= 0) {
            setActiveQuestion(previousQuestion);
            setSelectedOption(questions[previousQuestion].answer);
            scrollToQuestion(previousQuestion);
            setSelectedButtonIndex(questions[previousQuestion].id - 1);
        }
    };

    const handleNextClick = () => {
        const nextQuestion = activeQuestion + 1;
        if (nextQuestion < questions.length) {
            setActiveQuestion(nextQuestion);
            setSelectedOption(questions[nextQuestion].answer);
            scrollToQuestion(nextQuestion);
            setSelectedButtonIndex(questions[nextQuestion].id - 1);

        }
    };

    return (

        <>





            {istoggled && < >

                <div style={{ height: isFullScreen ? '100vh' : 'auto' }}>
                    <div className='servicetitle'>
                        <h1>
                            The Service based Company Questions
                            <div className='timer'>
                                {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}

                            </div>
                        </h1>

                    </div>


                    <div className='dis-sbct'>

                        <div className='left-side'>


                            <div className='questionli' >
                                {/* this is diff */}
                                <div>
                                    {questions.map((question, index) => (
                                        <div
                                            key={index}
                                            ref={question.ref}
                                            style={{ display: activeQuestion === index ? 'block' : 'none' }}
                                        >

                                            <h2 className='fontz'>{question.question}</h2>
                                            <p>Options:</p>
                                            <div  >
                                                {question.options.map((option, optionIndex) => (
                                                    <ul
                                                        key={optionIndex}
                                                        className={answers[index] === optionIndex ? 'selected-option' : 'li'}
                                                        onClick={() => handleOptionSelect(index, optionIndex)}
                                                    >
                                                        <label  >

                                                            <input className='que-class'
                                                                type="radio"
                                                                name={`question-${index}`}
                                                                value={option}
                                                                checked={answers[index] === optionIndex}
                                                               

                                                            />

                                                            {option}

                                                        </label>
                                                    </ul>


                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className='buttonsbctmain '>

                                <div className='buttonsbctmain2'>
                                    <button className='buttonsbct' onClick={handlePreviousClick} disabled={activeQuestion === 0}>
                                        Previous
                                    </button>
                                    <button className='buttonsbct' onClick={handleNextClick} disabled={activeQuestion === questions.length - 1}>
                                        Next
                                    </button>

                                    <button className='buttonsbctend' type='button' onClick={exitFullScreen} >End Exam</button>
                                </div>

                            </div>
                        </div>
                        <div className='sidebar'>
                            <h2>Questions
                            </h2>

                            <p className='sidbaricon'  >
                                {questions.map((question, index) => (
                                    <button className={`sidebutton ${question.isSolved ? 'solved' : ''} ${selectedButtonIndex === index ? 'selected' : ''}`} key={index} onClick={() => handleButtonClick(index)}>
                                        {`Que ${index + 1}`}
                                    </button>
                                ))}


                            </p>



                        </div>

                    </div>

                </div>




            </>}

        </>


    );





}

export default PBCT;
