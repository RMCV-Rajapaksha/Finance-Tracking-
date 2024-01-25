import React, { useState, useEffect } from 'react';
import './Saving_Goal.css';
import {Line, Pie, Bar } from 'react-chartjs-2';

const Saving_Goal = () => {
  const [targetValue, setTargetValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [depositValue, setDepositValue] = useState('');
  const [tableData, setTableData] = useState([]);
  const [totalDeposit, setTotalDeposit] = useState(0);

  //chart data

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

  const remainingAmount = targetValue ? parseFloat(targetValue) - totalDeposit : 0;
  const wantDepositColor = remainingAmount >= 0 ? 'red' : 'green';

  const [chartData, setChartData] = useState({
    labels: ['Fix-1', 'Fix-2', 'Fix-3', 'Fix-4'],
    datasets: [
      {
        label: 'Deposit Amount',
        data: [0, 0, 0, 0],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const handleInputChange = (e, index) => {
    const newData = [...chartData.datasets[0].data];
    newData[index] = parseFloat(e.target.value) || 0;

    setChartData({
      labels: chartData.labels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: newData,
        },
      ],
    });
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
        <table className='other-income-table-16'>
          <tbody>
            {chartData.labels.map((label, index) => (
              <tr key={index}>
                <td>{label}</td>
                <td>
                  <input
                    className={`data${index + 1}`}
                    value={chartData.datasets[0].data[index]}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='enter-deposit-chart'>
        <div className='enter-deposit-chart-in'>
          <Line data={chartData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Saving_Goal;
