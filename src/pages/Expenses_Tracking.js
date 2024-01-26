
import React, { useState } from 'react';

import './Expenses_Tracking.css';

const Expenses_Tracking = () => {

  //first part
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

  function handleSubmit(e) {
    e.preventDefault();
    setInputarr([...inputarr, inputdata]);
    console.log("Input data entered:", inputdata);

    setInputdata({
      name: "",
      rollNo: ""
    });
  }

  function displayData() {
    console.log("Objects stored in array:", inputarr);
  }


  //second part

  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({
    place: "",
    travelDate: ""
  });

  const handleTravelInputChange = (e) => {
    setNewDestination({
      ...newDestination,
      [e.target.name]: e.target.value
    });
  };

  const handleAddDestination = () => {
    setDestinations([...destinations, newDestination]);
    console.log("New travel destination added:", newDestination);

    setNewDestination({
      place: "",
      travelDate: ""
    });
  };

  //thread part
const [clothesExpenses, setClothesExpenses] = useState([]);
  const [newClothesExpense, setNewClothesExpense] = useState({
    item: "",
    price: ""
  });

  const handleClothesInputChange = (e) => {
    setNewClothesExpense({
      ...newClothesExpense,
      [e.target.name]: e.target.value
    });
  };

  const handleAddClothesExpense = () => {
    setClothesExpenses([...clothesExpenses, newClothesExpense]);
    console.log("New clothes expense added:", newClothesExpense);

    setNewClothesExpense({
      item: "",
      price: ""
    });
  };

  
  
  return (
    <React.Fragment>
    <section>
    <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
      <div class="flier"><img width="150" height="150" src="https://img.icons8.com/clouds/100/money-bag.png" /></div>
        <div className='Expenses'><p>Expenses Tracking</p></div>
        <div className='main'>
          <div className='food'>
<div className='f1'>FOOD</div>
<input className="food_in" type="text" placeholder="Food Item" name='name' value={inputdata.name} onChange={handleChange}/>   
<input className="food_price" type="number" placeholder="Price" name='rollNo' value={inputdata.rollNo} onChange={handleChange}/>   
<button className='submit' onClick={handleSubmit}>submit</button>

          </div>
          <div className='Travelling'>
          <div className='f2'>TRAVELING</div>
<input className="food_in" type="text" placeholder="Username" name='place' value={newDestination.place} onChange={handleTravelInputChange} />   
<input className="food_price" type="number" placeholder="Username"name='travelDate' value={newDestination.travelDate} onChange={handleTravelInputChange}/>   
<button className='submit' onClick={handleAddDestination}>submit</button>
            
          </div>

          <div className='o'>
          <div className='f3'>CLOTHES AND OTHER</div>
<input className="food_in" type="text" placeholder="Username"   name='item'
              value={newClothesExpense.item}
              onChange={handleClothesInputChange}/>   
<input className="food_price" type="number" placeholder="Username"  name='price'
              value={newClothesExpense.price}
              onChange={handleClothesInputChange}/>   
<button className='submit' onClick={handleAddClothesExpense}>submit</button>
</div>

        </div>



        <div className='food-table1'>
        <div className='food-table-topic'>FOOD</div>

        <table  className='food-table'>
        <tbody>
    <tr>
      <th>Food Item</th>
      <th>Price</th>

    </tr>
    {
inputarr.map((info, index) => {
  return (
    <tr key={index}>
      <td>{info.name}</td>
      <td> Rs{info.rollNo}</td>
    </tr>
  );
})
}
</tbody>
      </table>

        </div>
        <div className='traveling-table1'>
        <div className='Traveling-table-topic'>TRAVELING</div>

        <table  className='food-table'>
        <tbody>
    <tr>
      <th>TRAVELING</th>
      <th>Price</th>

    </tr>
    {
destinations.map((destination, index) => {
  return (
    <tr key={index}>
      <td>{destination.place}</td>
      <td> {destination.travelDate}</td>
    </tr>
  );
})
}
</tbody>
      </table>

        </div>

        
        <div className='cloths-table1'>
        <div className='cloths-table-topic'>CLOTHES AND OTHER</div>

        <table  className='food-table'>
        <tbody>
    <tr>
      <th>CLOTHES AND OTHER EXPENSES</th>
      <th>Price</th>

    </tr>
    {
clothesExpenses.map((expense, index) =>  {
  return (
    <tr key={index}>
      <td>{expense.item}</td>
      <td> Rs{expense.price}</td>
    </tr>
  );
})
}
</tbody>
      </table>

        </div>


    </section>
    </React.Fragment>
  )
}

export default Expenses_Tracking