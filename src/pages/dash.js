import React from 'react'
import './Saving_Goal.css';

const Saving_Goal = () => {
  return (
    <React.Fragment>
    <section>
        <div className='saving' >Saving Goal</div>
        <div className='saving-theme' >Start Your Budgeting Journey</div>
        <div className='fixed-expenses'>
<div className='rent' >
  <input className='rent-input' type="number" placeholder="Rents" />
</div>
<div className='utilities' >
<input className='utilities-input' type="number" placeholder="Rents" />
</div>
<div className='insurance-premiums' >
<input className='insurance-premiums-input' type="number" placeholder="Rents" />
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

        <div className='heme4' ></div>
        
    </section>
    </React.Fragment>

  )
}

export default Saving_Goal