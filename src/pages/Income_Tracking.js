
import React, { useState } from 'react';
import './Income_Tracking.css';


const Income_Tracking = () => {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    rollNo: ""
  });

  function handleChange(e) {
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit() {
    setInputarr([...inputarr, inputdata]);
    console.log("Input data entered:", inputdata);

    setInputdata({
      name: "",
      rollNo: ""
    });
  }

  //first
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit1 = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Set the submitted value to the current input value
    setSubmittedValue(inputValue);
  };

  return (
    <section>
       <div className='Income'><p>Income Tracking</p></div>
       <div className='main'>
          <div className='main-i'>
<div className='I1'>MAIN INCOME</div>

<input className="priceA" type="number" placeholder="Price" value={inputValue} onChange={handleInputChange}/>   
<button className='submit' onClick={handleSubmit1}>submit</button>

          </div>
          <div className='other'>
          <div className='I2'>OTHER INCOME</div>
<input className="in" type="text" placeholder="Username" name='name' value={inputdata.name} onChange={handleChange} />   
<input className="price" type="number" placeholder="Username" name='rollNo' value={inputdata.rollNo} onChange={handleChange}/>   
<button className='submit' onClick={handleSubmit}>submit</button>
            
          </div>
        </div>
<div className='Main_income_div'>
<div className='main_income_topic'>MAIN INCOME</div>
<div>{submittedValue}</div>

</div>
<div className='other_income_table'>
<div className='other_topic'>OTHER INCOME</div>

<table className ='other-income-table'  >
<tbody>
<tr>
<th>tag</th>
<th>Price</th>

</tr>
{
inputarr.map((info, index) => {
return (
<tr key={index}>
<td>{info.name}</td>
<td> Rs {info.rollNo}</td>
</tr>
);
})
}
</tbody>
</table>

</div>
        
       

        
    </section>
  )
}

export default Income_Tracking