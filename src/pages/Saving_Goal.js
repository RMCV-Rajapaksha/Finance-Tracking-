import React, { useState, useEffect } from 'react';
import './Saving_Goal.css';
import { Pie } from 'react-chartjs-2';

const Saving_Goal = () => {
 

  return (
    <React.Fragment>
      
      <div className='saving'>Saving Goal</div>
        <div className='saving-theme'>It's never too late to start saving</div>
        <div className='target-1'>
          <div className='target-1-topic'> 
          Enter Your Target 
          </div>
          <input
            className='target-input'
            type='number'
            placeholder='Target'
          />
      </div>
      <div className='target-2'>
          <div className='target-1-topic'> 
          Date and Money Deposit Date 
          </div>
          <input
            className='date-input'
            type='date'
            placeholder='Date'
          />
          <input
            className='deposit-input'
            type='number'
            placeholder='Rs.'
          />
      </div>

<div className="table-report">

</div>
<div className='total-deposit'>
<div className='total-deposit-n'> 
Total Deposited Amount
          </div>
</div>

<div className='want-deposit'>
<div className='want-to-deposit-name'> 
How Much Do You Want to Deposit
          </div>
</div>

<div className='enter-deposit'></div>
    </React.Fragment>
  );
};

export default Saving_Goal;
