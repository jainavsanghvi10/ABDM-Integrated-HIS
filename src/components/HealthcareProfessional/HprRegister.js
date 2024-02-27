import React, { useState } from 'react';
import Button from '@mui/material/Button';
import doctorsImg from '../../assets/images/doctors.png'


const HprRegister = () => {

    return (
        <div className="container d-flex flex-column align-items-center p-5">
            <h3 className="fw-bold font-blue">HealthCare Professional Registery</h3>
            {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
            <hr style={{ width: '300px' }} />

            <div className='d-flex flex-column w-50 my-5 p-5 border border-blue rounded-4'>

                <label for="basic-url" className="form-label fw-bold">Select Your Registeration Council</label>
                <select className="mb-4 form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <label for="basic-url" className="form-label fw-bold">Enter Registeration Number:</label>
                <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                </input>

                <label for="basic-url" className="form-label fw-bold">Select Category</label>
                <select className="mb-4 form-select" aria-label="Default select example">
                    <option selected>Please Select</option>
                    <option value="1">Doctor</option>
                    <option value="2">Nurse</option>
                </select>

                <label for="basic-url" className="form-label fw-bold">Select Sub Category</label>
                <select className="mb-4 form-select" aria-label="Default select example">
                    <option selected>Please Select</option>
                    <option value="1">Modern Medicine</option>
                    <option value="2">...</option>
                </select>

                <label for="basic-url" className="form-label fw-bold">Create Healthcare Professional ID</label>
                <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                </input>
            </div>

            <div className='d-flex justify-content-around'>

                <Button variant="contained" style={{ width: '200px', backgroundColor: 'rgb(2,48,106)' }} className='mx-1 my-3 fw-bold text-capitalize'>Submit</Button>
                <Button variant="outlined" style={{ width: '200px', color: 'rgb(2,48,106)' }} className='mx-1 my-3 fw-bold text-capitalize'>Reset</Button>

            </div>

        </div>
    );
};
export default HprRegister;