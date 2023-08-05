import React,{createContext, useReducer} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Analytics, { Datagetting } from './components/Analytics';
import Topscorer from './components/Topscorer';
import Footer from './components/footer';
import './App.css';
import SBCT from './components/SBCT';
import PBCT from './components/PBCT';
import Logout from './components/Logout'
import { Data } from './components/SBCT';
import Maybepresent from './components/Maybepresent';

import { initialstate,reducer } from './Reducer/usereducer';
import Backtohome from './components/Backtohome';

export const Usercontext=createContext();

const Routing=()=>{
  return(
<>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>    
    <Route path='/Analytics' element={<Analytics/>}/>
    <Route path='/Backtohome' element={<Backtohome/>}/>
    <Route path='/Topscorer' element={<Topscorer/>}/>
    <Route path='/SBCT' element={<SBCT/>}/>
    <Route path='/PBCT' element={<PBCT/>}/>
    <Route path='/Logout' element={<Logout/>}/>
    
  
   </Routes>
   </>
  )
}

function App() {
  //intial state value is stored in state 
  const [state,dispatch]=useReducer(reducer,initialstate);
  return (
   
   <>
   <div className='Appclass'>
   <Usercontext.Provider value={{state,dispatch}}>
       
       <Maybepresent>
       <div className='backgroundimgnav '>
       <Navbar/>
       </div>
       </Maybepresent>
       
    
        <Routing />
       
       
     
       <br>
       </br>
       <br></br>
    
    <div className='footer'>
    <Maybepresent>
       <div className='backgroundimgnav '>
       <Footer/>
       </div>
       </Maybepresent>
    </div>
       
      
       </Usercontext.Provider>
    
       
       
   </div>
   
  
   </>
    
    
  );
}

export default App;