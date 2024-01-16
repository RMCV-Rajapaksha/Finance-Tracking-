import React from 'react'

import Sidebar from './Sidebar'
import './MainPage.css'
import NavPage from './NavPage'

const MainPage = () => {
  return (
<React.Fragment>
  
    {/* sidebar section*/}
    <section>

    <div className='col'>
      <div className='main-heading'>
          <div className='logo'>


          </div>
        <div className='main-heading-topic' >
        PERSONAL FINANCE<br/>
TRACKER 
        </div>
      </div>
        <Sidebar/>
        <button className='logout-b'>

       Logout
        </button>
    </div>
    
    <div className='ee'><NavPage/></div>

    </section>
    
    </React.Fragment>
        
    
   
            
        
    
    
  )
}

export default MainPage