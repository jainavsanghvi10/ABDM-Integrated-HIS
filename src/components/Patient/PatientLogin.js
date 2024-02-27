import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';


const PatientLogin = () => {
    const [otp, setOtp] = useState('');

    return (
        <div className="container d-flex flex-column align-items-center p-5">
            <h3 className="fw-bold font-blue mb-5">Create PHR Account</h3>
            {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
            <input type="tel" className="form-control py-3 border-2 fw-bold" style={{ width: '500px' }} id="mobile-number" placeholder="Enter Mobile Number" size="10">
            </input>

            <Button variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='my-3 fw-bold text-capitalize'>Send OTP</Button>

            <p className='text-muted mt-4 fw-bold'>Enter OTP</p>


            <div className='w-50'>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    // renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle="m-2 fw-bold text-muted fs-3 w-100 border-1 rounded"
                    containerStyle="mx-5"
                // inputType='tel'
                />
            </div>

            <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button>

            <div className='mt-4 d-flex flex-column align-items-center'>
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
            </div>

        </div>
    );
};
export default PatientLogin;