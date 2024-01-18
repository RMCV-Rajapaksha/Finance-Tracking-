import React, { useState, useEffect } from 'react';
import './Budgeting.css';
import { Pie } from 'react-chartjs-2';

const Budgeting = () => {
  const [fixedPrice, setFixedPrice] = useState(0);
  const [variablePrice, setVariablePrice] = useState(0);


  const [inputValues, setInputValues] = useState({
    rent: 0,
    utilities: 0,
    insurancePremiums: 0,
  });

  const [additionalInputValues, setAdditionalInputValues] = useState({
    food: 0,
    traveling: 0,
    clothesAndOther: 0,
  });

  const data = {
    labels: ['Rent', 'Utilities', 'Insurance Premiums'],
    datasets: [
      {
        data: [
          inputValues.rent,
          inputValues.utilities,
          inputValues.insurancePremiums,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  


  const additionalData = {
    labels: ['Food', 'Traveling', 'Clothes and Other'],
    datasets: [
      {
        data: [
          additionalInputValues.food,
          additionalInputValues.traveling,
          additionalInputValues.clothesAndOther,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const handleChange = (e, expenseType) => {
    const value = parseFloat(e.target.value) || 0;

    if (['food', 'traveling', 'clothesAndOther'].includes(expenseType)) {
      setAdditionalInputValues((prevValues) => ({
        ...prevValues,
        [expenseType]: value,
      }));
    } else {
      setInputValues((prevValues) => ({
        ...prevValues,
        [expenseType]: value,
      }));
    }
  };
  React.useEffect(() => {
    const fixedExpensesTotal =
      inputValues.rent + inputValues.utilities + inputValues.insurancePremiums;
    setFixedPrice(fixedExpensesTotal);
  }, [inputValues]);

  useEffect(() => {
    const fixedExpensesTotal =
      inputValues.rent + inputValues.utilities + inputValues.insurancePremiums;
    setFixedPrice(fixedExpensesTotal);
  }, [inputValues]);

  useEffect(() => {
    const variableExpensesTotal =
      additionalInputValues.food +
      additionalInputValues.traveling +
      additionalInputValues.clothesAndOther;
    setVariablePrice(variableExpensesTotal);
  }, [additionalInputValues]);
  

  return (
    <React.Fragment>
      
      <div className='saving'>Budgeting</div>
        <div className='saving-theme-1'>|</div>
        <div className='fixed-expenses'>
          <div className='fixed-expenses-topic'>
          Fixed Expenses
          </div>
          <div className='fixed-price'>
        <p>Rs {fixedPrice}</p>
      </div>
          <div className='rent'>
            <dev className="rent-topic">
              RENT
            </dev>
            <input
              className='rent-input'
              type='number'
              placeholder='Rent'
              value={inputValues.rent}
              onChange={(e) => handleChange(e, 'rent')}
            />
          </div>
          <div className='utilities'>
          <dev className="utilities-topic">
          UTILITIES
            </dev>
            <input
              className='utilities-input'
              type='number'
              placeholder='Utilities'
              value={inputValues.utilities}
              onChange={(e) => handleChange(e, 'utilities')}
            />
          </div>
          <div className='insurance-premiums'>
          <dev className="insurance-topic">
          INSURANCE
            </dev>
            <input
              className='insurance-premiums-input'
              type='number'
              placeholder='Insurance Premiums'
              value={inputValues.insurancePremiums}
              onChange={(e) => handleChange(e, 'insurancePremiums')}
            />
          </div>
        </div>
      <div className='variable-expenses'>
        <div className='variable-expenses-topic'>Variable Expenses</div>
        <div className='variable-price'> 
        <p>Rs {variablePrice}</p>
        </div>
        <div className='rent'>
          <div className='food-title'>FOOD</div>
          <input
            className='food-input'
            type='number'
            placeholder='Food'
            value={additionalInputValues.food}
            onChange={(e) => handleChange(e, 'food')}
          />
        </div>
        <div className='utilities'>
        <div className='traveling-title-1'>TRAVELING</div>
          <input
            className='traveling-input'
            type='number'
            placeholder='Traveling'
            value={additionalInputValues.traveling}
            onChange={(e) => handleChange(e, 'traveling')}
          />
        </div>
        <div className='insurance-premiums'>
        <div className='clothes-other-title'>CLOTHES AND OTHER</div>
          <input
            className='clothes-other-input'
            type='number'
            placeholder='Clothes and Other'
            value={additionalInputValues.clothesAndOther}
            onChange={(e) => handleChange(e, 'clothesAndOther')}
          />
        </div>
      </div>

      <div className='chart-container'>
        <div className='chart-container-in'>
          <Pie data={data} />
        </div>
      </div>

      <div className='chart-container-2'>
        <div className='chart-container-2-in'>
          <Pie data={additionalData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Budgeting;
