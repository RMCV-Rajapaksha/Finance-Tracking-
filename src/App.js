import './App.css';
import React, { useState } from 'react';
import MainPage from './components/MainPage';

import { BrowserRouter } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the username and password are equal to 'admin'
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      ) : (
        <div className='main-container'>
          <div className='rectangle'>
            <div className='personal-finance-tracker'>
              PERSONAL FINANCE
              <br />
              TRACKER
            </div>
            <div className='secure-your-financial-future'>
             |
            </div>
            <div className='whatsapp-image-at' />
            <div className='seamlessly-manage'>
              Seamlessly Manage, Monitor, and Master Your Money with Our Intuitive
              Personal Finance Tracker. Take Control and Achieve Goals
            </div>
          </div>
          <div className='rectangle-1'>
            <div className='welcome'>
            <div className={`w welcome-animation`}>Welcome</div>
  <div className='empty'> </div>
            </div>
            <div className='rectangle-4'>
              <input
                className="user-name"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='rectangle-4'>
              <input
                className="user-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='rectangle-5'>
              <div className='text-8' onClick={handleLogin}>
                Login
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
