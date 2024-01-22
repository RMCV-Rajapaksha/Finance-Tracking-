
import './login.css'

const Login = () => {

   
  return (
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
        <div className='rectangle-4' ><input className="" type="password" placeholder="Username"/>   </div>
        <div className='rectangle-4' ><input className="" type="password" placeholder="Password"/>   </div>
        <div className='rectangle-5'>
            
          <button className='text-8'>Login</button>
        </div>
      </div>
    </div>
      
   
  );
};

export default Login