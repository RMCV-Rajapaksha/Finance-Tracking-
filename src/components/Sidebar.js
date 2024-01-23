import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SidebarData } from '../data/SidebarData'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {
    const activeLink = 'bg-gray-900 text-white flex items-center space-x-3 p-2 my-2 rounded-md'
    const normalLink = 'text-gray-300 flex items-center space-x-3 p-2 my-2 rounded-md hover:bg-gray-700 hover:text-white'
  return (
    
<section>
    <div className='text-white'>
      {
        SidebarData.map((item, index) => {
          return (
            <div  className='a' key={index}>
            <NavLink to={item.path} 
             className={({isActive})=>isActive?activeLink:normalLink}>
             
              <button className='b'><span><div >{item.icon}{item.title}</div></span></button>
            </NavLink>
            
            </div>
          
 
           
            
          )
        })
      }
    </div>

</section>
        
  
    
  )
}

export default Sidebar