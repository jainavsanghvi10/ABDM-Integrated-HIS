import React, { useState } from 'react';
import Button from '@mui/material/Button';
import doctorsImg from '../../assets/images/doctors.png'


const HprLogin = () => {

    return (
        <div className="container d-flex flex-column align-items-center p-5">
            <h3 className="fw-bold font-blue">HealthCare Professional Login</h3>
            {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
            <hr style={{ width: '300px' }} />

            <img className='my-5 w-25' src={doctorsImg} />

            <label for="basic-url" className="form-label fw-bold">Enter your HealthCare Professional ID:</label>
            <input type="number" className="mb-4 p-2 border-2 fw-bold" style={{ width: '300px' }} id="patient-email" placeholder="">
            </input>

            <div className='d-flex justify-content-around'>

                <Button variant="contained" style={{width:'200px', backgroundColor: 'rgb(2,48,106)' }} className='mx-1 my-3 fw-bold text-capitalize'>Submit</Button>
                <Button variant="outlined" style={{width:'200px', color: 'rgb(2,48,106)' }} className='mx-1 my-3 fw-bold text-capitalize'>Reset</Button>

            </div>

            <div className='w-50 text-center mt-3'>
                <div className='d-flex justify-content-center'>
                    <span className='me-3'>Create HealthCare Professional ID:</span>
                    <span className='fw-bold' style={{ color: 'rgb(2,48,106)' }}>Register</span>
                </div>
            </div>

        </div>
    );
};
export default HprLogin;