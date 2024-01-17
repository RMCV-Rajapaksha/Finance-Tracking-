import React, { useState, useEffect } from 'react';
import './Saving_Goal.css';
import { Pie } from 'react-chartjs-2';

const Saving_Goal = () => {
  const [inputValues, setInputValues] = useState({
    rent: 0,
    utilities: 0,
    insurancePremiums: 0,
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

  const handleChange = (e, expenseType) => {
    const value = parseFloat(e.target.value) || 0;
    setInputValues((prevValues) => ({
      ...prevValues,
      [expenseType]: value,
    }));
  };

  useEffect(() => {
   
  }, [inputValues]);

  return (
    <React.Fragment>
      <section>
        <div className='saving'>Saving Goal</div>
        <div className='saving-theme'>Start Your Budgeting Journey</div>
        <div className='fixed-expenses'>
          <div className='rent'>
            <input
              className='rent-input'
              type='number'
              placeholder='Rent'
              value={inputValues.rent}
              onChange={(e) => handleChange(e, 'rent')}
            />
          </div>
          <div className='utilities'>
            <input
              className='utilities-input'
              type='number'
              placeholder='Utilities'
              value={inputValues.utilities}
              onChange={(e) => handleChange(e, 'utilities')}
            />
          </div>
          <div className='insurance-premiums'>
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

        <div className='rent' >
        <input className='food-input' type="number" placeholder="Rents" />
        </div>
<div className='utilities' >
<input className='traveling-input' type="number" placeholder="Rents" />
</div>
<div className='insurance-premiums' >
<input className='clothes-other-input' type="number" placeholder="Rents" />
</div>
        </div>

        <div className='chart-container'>
          <div className='chart-container-in'>
          <Pie data={data} />
          </div>
         
        </div>
        <div className='chart-container-2'> 
        <div className='chart-container-2-in'>
          <Pie data={data} />
          </div>
        </div>

      </section>
    </React.Fragment>
  );
};

export default Saving_Goal;
