import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Saving_Goal from '../pages/Saving_Goal';
import Budgeting from '../pages/Budgeting';
import Expenses_Tracking from '../pages/Expenses_Tracking';
import Income_Tracking from '../pages/Income_Tracking';
import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';


function NavPage() {
    return (

        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Income_Tracking" element={<Income_Tracking />} />
                    <Route path="/Expenses_Tracking" element={<Expenses_Tracking />} />
                    <Route path="/Budgeting" element={<Budgeting />} />
                    <Route path="/Saving_Goal" element={<Saving_Goal />} />
                    <Route path="/Reports" element={<Reports/>} />
                </Routes>
            </section>
        </React.Fragment>
    );
}

export default NavPage