import React, { useState, useEffect } from 'react';
import { Bar,Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  
  const location = useLocation();
  const mainIncome = new URLSearchParams(location.search).get('mainIncome');

  

  // Chart configuration options
  const chartOptions = {
    scales: {
      x: {
        type: 'category',
      },
    },
  };


 
  const chartData = {
    labels: ['Bank of Ceylon', "People's Bank", 'DFCC Bank', 'Sampath Bank'],
    datasets: [
      {
        label: 'Bank Account Amounts',
        data: bankAccountAmounts,
        backgroundColor: 'rgba(27, 157, 148, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <section>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
        <div className='dashboard-title'>Dashboard</div>
        
        <div className='total-income'>
<div className='total-income-title'>Total Income</div>
<div className='total-income-value'>Rs {mainIncome}</div>
<img class="icon" width="120" height="120" src="https://img.icons8.com/ios/100/1A1A1A/economic-improvement.png" alt="economic-improvement"/>
            </div>
            <div className='total-expenses'>
<div className='total-expenses-title'>Total Expenses</div>
<div className='total-expense-value'>Rs 50000.00</div>

<div className='food-2'>
<div className='food-2-title'>FOR FOOD</div>
<div className='food-2-value'>Rs 50000.00</div>
<img className='icons' width="68" height="68" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/1A1A1A/external-line-graph-strategy-tanah-basah-basic-outline-tanah-basah.png" alt="external-line-graph-strategy-tanah-basah-basic-outline-tanah-basah"/>
</div>
<div className='traveling'>
<div className='traveling-title'>TRAVELING</div>
<div className='food-2-value'>Rs 50000.00</div>
<img className='icons' width="68" height="68" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/1A1A1A/external-line-graph-strategy-tanah-basah-basic-outline-tanah-basah.png" alt="external-line-graph-strategy-tanah-basah-basic-outline-tanah-basah"/>


</div>
<div className='other-1'>
<div className='other-title'>OTHER</div>
<div className='food-2-value'>Rs 75000.00</div>
<img className='icons' width="68" height="68" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/1A1A1A/external-line-graph-strategy-tanah-basah-basic-outline-tanah-basah.png" alt="external-line-graph-strategy-tanah-basah-basic-outline-tanah-basah"/>

</div>

              </div>
        <div className='saving-1'>
          <div className='account-table'>
            <table>
              <tr>
                <th>Banks</th>
                <td>Bank of Ceylon</td>
                <td>People's Bank</td>
                <td>DFCC Bank</td>
                <td>Sampath Bank</td>
              </tr>

              <tr>
                <th>Account Summary</th>
                {bankAccountAmounts.map((amount, index) => (
                  <td key={index}>
                    <input
                      type='number'
                      className='bank-account'
                      placeholder='Enter Bank Account Amount'
                      value={amount}
                      onChange={(e) => updateBankAccountAmount(index, +e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            </table>
          </div>
        </div>

    
     
      
       <div className='Expenses-chart'>
       <div className='expenses-chart-title'>Expenses Breakdown</div>
          <div className='expenses-chart-in'>
            <Pie data={expensesChartData} />
          </div>
</div>
       

    
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
