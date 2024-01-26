import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './Income_Tracking.css';

const Income_Tracking = () => {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: '',
    rollNo: '',
  });
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [totalOtherIncome, setTotalOtherIncome] = useState(0);

  // State to store chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Income',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const handleMainInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMainSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    updateChartData(inputValue);
  };

  const handleOtherInputChange = (event) => {
    const { name, value } = event.target;
    setInputdata({
      ...inputdata,
      [name]: value,
    });
  };

  const handleOtherSubmit = () => {
    setInputarr([...inputarr, inputdata]);
    setTotalOtherIncome(totalOtherIncome + parseFloat(inputdata.rollNo));
    setInputdata({
      name: '',
      rollNo: '',
    });
    updateChartData(inputdata.rollNo);
  };

  const updateChartData = (value) => {
    const newLabels = chartData.labels.concat(submittedValue);
    const newData = chartData.datasets[0].data.concat(value);

    setChartData({
      labels: newLabels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: newData,
        },
      ],
    });
  };

  return (
    <section>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div className='Income'>
        <p>Income Tracking</p>
      </div>
      <div className='main'>
        <div className='line-chart'>
          <Line data={chartData} />
        </div>
        <div className='main-i'>
          <div className='I1'>MAIN INCOME</div>
          <input
            className='priceA'
            type='number'
            placeholder='Price'
            value={inputValue}
            onChange={handleMainInputChange}
          />
          <button className='submit' onClick={handleMainSubmit}>
            submit
          </button>
        </div>
        <div className='other'>
          <div className='I2'>OTHER INCOME</div>
          <input
            className='in'
            type='text'
            placeholder='Username'
            name='name'
            value={inputdata.name}
            onChange={handleOtherInputChange}
          />
          <input
            className='price'
            type='number'
            placeholder='Username'
            name='rollNo'
            value={inputdata.rollNo}
            onChange={handleOtherInputChange}
          />
          <button className='submit1' onClick={handleOtherSubmit}>
            submit
          </button>
        </div>
      </div>
      <div className='Main_income_div'>
        <div className='main_income_topic'>
          <div className='Main_income_div_text1'>
            TOTAL OTHER INCOME: Rs {totalOtherIncome}
          </div>
        </div>
        <div className='main-income-print'>
          <div className='Main_income_div_text2'>
            MAIN INCOME: Rs {submittedValue}
          </div>
        </div>

        <div className='total-income-print'>
          <div className='Main_income_div_text'>
            TOTAL INCOME: Rs {parseInt(submittedValue) + totalOtherIncome}
          </div>
        </div>
      </div>
      <div className='other_income_table_1'>
        <div className='other_topic'>OTHER INCOME</div>

        <table className='other-income-table-1'>
          <tbody>
            <tr>
              <th>tag</th>
              <th>Price</th>
            </tr>
            {inputarr.map((info, index) => (
              <tr key={index}>
                <td>{info.name}</td>
                <td> Rs {info.rollNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Income_Tracking;
