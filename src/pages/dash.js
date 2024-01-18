
import './App.css';
import React from 'react';
import MainPage from './components/MainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (


    <React.Fragment>

<div className='main-container'>
      <div className='rectangle'>
        <div className='personal-finance-tracker'>
          PERSONAL FINANCE
          <br />
          TRACKER
        </div>
        <div className='secure-your-financial-future'>
          Secure Your Financial Future
        </div>
        <div className='whatsapp-image-at' />
        <div className='seamlessly-manage'>
          
          Seamlessly Manage, Monitor, and Master Your Money with Our Intuitive
          Personal Finance Tracker. Take Control and Achieve Goals
        </div>
      </div>
      <div className='rectangle-1'>
        <div className='welcome'>
          <div className='w'>Welcome</div>
         
          <div className='empty'> </div>
        </div>
        <div className='rectangle-4' ><input className="user-name" type="text" placeholder="Username"/>   </div>
        <div className='rectangle-4' ><input className="user-password" type="password" placeholder="Password"/>   </div>
        <div className='rectangle-5'>
            
          <div className='text-8'>Login</div>
        </div>
      </div>
    </div>
      
      {/* <BrowserRouter>
      <MainPage />
      </BrowserRouter> */}
       
        </React.Fragment>
        
  );
}

export default App;
