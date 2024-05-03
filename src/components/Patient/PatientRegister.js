import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import hospitalImg from '../../assets/images/Group 160.png'
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        gender: '',
        dob: '',
        abhaAddress: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {
        console.log(formData);
        try {
            const response = await axios.post(
                'http://localhost:8086/registerPatient',
                formData
            );
            const data = response.data;
            console.log(data);
            navigate("/doctors-list")
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        // <>
        <div className='py-5 bg-signup'>
            <div className='d-flex w-75 mx-auto border shadow-lg rounded rounded-4' style={{ background: 'rgb(255, 229, 229)' }}>
                <div className='w-50 d-flex align-items-center justify-content-center rounded-start-4 border-end border-3'>
                    <img className='my-4 w-100' src={hospitalImg} />
                </div>

                <div className='container p-5 w-50'>
                    <p className="fw-bold font-purple mb-3 ms-2" style={{fontSize:'large'}}>Patient Register</p>
                    {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
                    <input type="text" className="my-2 p-3 border border-2 fw-bold" style={{ width: '350px', fontSize:'small' }} id="username" onChange={handleChange} placeholder="Username">
                    </input>
                    <input type="text" className="my-2 p-3 border border-2 fw-bold" style={{ width: '350px', fontSize:'small' }} id="email" onChange={handleChange} placeholder="Email Address">
                    </input>



                    <div className='d-flex'>
                        <select className="form-select my-2 p-3 border-2 fw-bold" style={{ width: '175px', fontSize:'small' }} aria-label="Default select example" onChange={handleChange} value={formData['gender']} id='gender'>
                            <option value="" selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <input type="date" className="my-2 p-3 border border-2 fw-bold" style={{ width: '175px', fontSize:'small' }} id="dob" onChange={handleChange}>
                        </input>

                    </div>

                    <input type="text" className="my-2 p-3 border border-2  fw-bold" style={{ width: '350px', fontSize:'small' }} id="abhaAddress" placeholder="ABHA Address" onChange={handleChange}>
                    </input>

                    <Button variant="outlined" size='small' style={{color: '#4200FF', borderColor:'#4200FF', fontSize:'small' }} className='my-3 fw-bold p-2 px-5 text-capitalize rounded-2' onClick={handleSubmit}>Submit</Button>

                    {/* <div className='d-flex'>
                    <select class="form-select my-3 p-3 border-2 fw-bold" style={{ width: '166px' }} aria-label="Default select example">
                        <option selected>State</option>
                    </select>

                    <select class="form-select my-3 p-3 border-2 fw-bold" style={{ width: '166px' }} aria-label="Default select example">
                        <option selected>District</option>
                    </select>

                    <input type="number" className="my-3 p-3 border border-2 fw-bold" style={{ width: '166px' }} id="patient-zip" placeholder='Zip Code'>
                    </input>
                </div> */}


                    {/* <div className='mt-4 d-flex flex-column align-items-center'>
                    <Button variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='w-100 my-3 fw-bold px-5 text-capitalize'>Login with ABHA Address</Button>
                    <Button variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='w-100 my-3 fw-bold px-5 text-capitalize'>Login with Email ID</Button>
                    <Button variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='w-100 my-3 fw-bold px-5 text-capitalize'>Login with ABHA Number</Button>
                </div>

                <div className='w-50 text-center mt-3'>
                    <div className='d-flex justify-content-center'>
                        <span className='me-5'>Don't have an ABHA number ?</span>
                        <span style={{ color: 'rgb(2,48,106)' }}>Create Now</span>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <span className='me-5'>Don't have an ABHA address?</span>
                        <span style={{ color: 'rgb(2,48,106)' }}>Register</span>
                    </div>
                </div> */}

                </div>
            </div>
        </div>
        // </>
    )
}

export default PatientRegister;