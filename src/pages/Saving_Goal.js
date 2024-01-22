import React, { useState } from 'react';
import './Saving_Goal.css';
import { Pie } from 'react-chartjs-2';

const Saving_Goal = () => {
  const [targetValue, setTargetValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [depositValue, setDepositValue] = useState('');
  const [tableData, setTableData] = useState([]);
  const [totalDeposit, setTotalDeposit] = useState(0);
  
//chart data
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [pieChartData, setPieChartData] = useState(null);

  const handleTargetChange = (e) => {
    setTargetValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleDepositChange = (e) => {
    setDepositValue(e.target.value);
  };

  const handleSubmit = () => {
    if (dateValue && depositValue) {
      const depositAmount = parseFloat(depositValue);
      // Add the new entry to the tableData array
      setTableData([...tableData, { date: dateValue, deposit: depositAmount }]);

      // Update total deposit
      setTotalDeposit((prevTotalDeposit) => prevTotalDeposit + depositAmount);

    
      setDateValue('');
      setDepositValue('');
    }
  };

  // Calculate the remaining amount 
  const remainingAmount = targetValue ? parseFloat(targetValue) - totalDeposit : 0;

  //  color based 
  const wantDepositColor = remainingAmount >= 0 ? 'red' : 'green';


  const generatePieChartData = () => {
    return {
      labels: ['Data1', 'Data2', 'Data3', 'Data4'],
      datasets: [
        {
          data: [data1, data2, data3, data4].map(parseFloat),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        },
      ],
    };
  };

  const updatePieChartData = () => {
    const chartData = generatePieChartData();
    setPieChartData(chartData);
  };
  

  return (
    <React.Fragment>
      <div className='saving'>Saving Goal</div>
      <div className='saving-theme'>|</div>
      <div className='target-1'>
        <div className='target-1-topic'>Enter Your Target</div>
        <input
          className='target-input'
          type='number'
          placeholder='Target'
          value={targetValue}
          onChange={handleTargetChange}
        />
      </div>
      <div className='target-2'>
        <div className='target-1-topic'>Date and Money Deposit Date</div>
        <button className='deposit-button' onClick={handleSubmit}>
          Submit
        </button>
        <input
          className='date-input'
          type='date'
          placeholder='Date'
          value={dateValue}
          onChange={handleDateChange}
        />
        <input
          className='deposit-input'
          type='number'
          placeholder='Rs.'
          value={depositValue}
          onChange={handleDepositChange}
        />
      </div>

      <div className='table-report'>
      <div className='report-saving-goal-topic'>Report</div>
        <div className='report-saving-goal'>
       
          <table className='other-income-table-6'>
            
            <tbody>
              <tr>
                <th>Date</th>
                <th>Deposit Amount</th>
              </tr>
              {tableData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>Rs. {entry.deposit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className='total-deposit'>
        <div className='total-deposit-n'>Total Deposited Amount: Rs. {totalDeposit}</div>
      </div>

      <div className='want-deposit'>
        <div className='want-to-deposit-name' style={{ color: wantDepositColor }}>
          Remaining Amount to Reach Target: Rs. {remainingAmount}
        </div>
      </div>

      <div className='enter-deposit'>
      <table className='other-income-table'>
           
           
            <tbody>
              <tr>
                <td>Date</td>
                <td><input className='data1'/></td>
              </tr>
              <tr>
                <td>Date</td>
                <td><input className='data2'/></td>
              </tr>
              <tr>
                <td>Date</td>
                <td><input className='data3'/></td>
              </tr>
              <tr>
                <td>Date</td>
                <td><input className='data4'/></td>
              </tr>
            </tbody>
          </table>
      </div>
      <div className='enter-deposit-chart'>
  <div className='enter-deposit-chart-in'>
    {pieChartData && pieChartData.labels ? (
      <Pie data={pieChartData} />
    ) : (
      <p>No data available for the Pie chart.</p>
    )}
  </div>
</div>
    </React.Fragment>
  );
};

export default Saving_Goal;
