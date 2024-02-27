import React, { useState } from 'react';
import Button from '@mui/material/Button';
import doctorsImg from '../../assets/images/doctors.png'


const HipRegister = () => {

    return (
        <div className="container d-flex flex-column align-items-center p-5">
            <h3 className="fw-bold font-blue">Hospital Admin Registery</h3>
            {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
            <hr style={{ width: '300px' }} />

            <div className='d-flex flex-column w-50 my-5 p-5 border border-blue rounded-4'>

                <div className='d-flex'>
                    <div className='w-50'>
                        <label for="basic-url" className="form-label fw-bold">Enter Admin First Name:</label>
                        <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                        </input>
                    </div>
                    <div className='w-50'>
                        <label for="basic-url" className="form-label fw-bold">Enter Admin Second Name:</label>
                        <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                        </input>
                    </div>

                </div>


                <div className='d-flex'>
                    <div className='w-50'>
                        <label for="basic-url" className="form-label fw-bold">Enter Facility Name:</label>
                        <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                        </input>
                    </div>
                    <div className='w-50'>
                        <label for="basic-url" className="form-label fw-bold">Enter Facility ID:</label>
                        <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                        </input>
                    </div>

                </div>

                <label for="basic-url" className="form-label fw-bold">Enter Hospital Address:</label>
                <input type="number" className="mb-4 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="">
                </input>

                <div className='d-flex justify-content-between'>
                    <div style={{width:'30%'}}>
                        <label for="basic-url" className="form-label fw-bold">State</label>
                        <select className="mb-4 form-select p-2" aria-label="Default select example">
                            <option selected>Select State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div style={{width:'30%'}}>
                        <label for="basic-url" className="form-label fw-bold">District</label>
                        <select className="mb-4 form-select p-2" aria-label="Default select example">
                            <option selected>Select District</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div style={{width:'30%'}}>
                        <label for="basic-url" className="form-label fw-bold">ZipCode</label>
                        <input type="number" className="w-100 p-2 border-2 rounded-2 fw-bold" id="patient-email" placeholder="ZipCode">
                        </input>
                    </div>
                </div>

                <label for="basic-url" className="form-label fw-bold">Create Hospital Admin ID</label>
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
export default HipRegister;