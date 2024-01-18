import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './MainPage.css';
import NavPage from './NavPage';

const MainPage = () => {
  const handleLogout = () => {
    // You can perform any necessary cleanup or logout logic here
    // For simplicity, we are using Link to navigate back to the login page
  };

  return (
    <React.Fragment>
      {/* sidebar section*/}
      <section>
        <div className='col'>
          <div className='main-heading'>
            <div className='logo'></div>
            <div className='main-heading-topic'>
              PERSONAL FINANCE
              <br />
              TRACKER
            </div>
          </div>
          <Sidebar />
          <button  to='/' className='logout-b' onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className='ee'>
          <NavPage />
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
