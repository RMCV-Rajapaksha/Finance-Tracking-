import React, { useState, useEffect } from 'react';
import './Saving_Goal.css';
import { Pie } from 'react-chartjs-2';

const Saving_Goal = () => {
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

  return (
    <React.Fragment>
      
      <div className='saving'>Saving Goal</div>
        <div className='saving-theme'>Start Your Budgeting Journey</div>
        <div className='fixed-expenses'>
          <div className='rent'>
            <dev className="rent-topic">
              Rent
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
          Utilities
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
          Insurance
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
        <div className='rent'>
          <input
            className='food-input'
            type='number'
            placeholder='Food'
            value={additionalInputValues.food}
            onChange={(e) => handleChange(e, 'food')}
          />
        </div>
        <div className='utilities'>
          <input
            className='traveling-input'
            type='number'
            placeholder='Traveling'
            value={additionalInputValues.traveling}
            onChange={(e) => handleChange(e, 'traveling')}
          />
        </div>
        <div className='insurance-premiums'>
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

export default Saving_Goal;
