import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import hospitalImg from '../assets/images/Group 160.png'


const UserLogin = () => {
    // document.body.style = 'background: rgba(2, 49, 106);';

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('User ID:', userId);
        console.log('Password:', password);

        const data = {
            email: userId,
            password: password
        };

        // POST request to the server API
        axios.post('http://localhost:8088/auth/signin', data)
            .then(response => {
                const token = response.data;
                // Store the token in localStorage or session storage for future use
                // localStorage.setItem('token', token);
                console.log('JWT Token:', token);
                // Redirect or perform further actions based on successful login
            })
            .catch(error => {
                alert("Invalid Credential")
                console.error('Errors logging in:', error);
            });
    };
    return (
        // <div className='bg-blue' style={{height:''}}>
        <div className='py-5 bg-signup'>
            <div className='d-flex w-75 mx-auto border shadow-lg rounded rounded-4' style={{ background: 'rgb(255, 229, 229)' }}>
                {/* <h3 className="fw-bold font-blue">User Login</h3> */}
                {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
                {/* <hr style={{ width: '300px' }} /> */}
                <div className='w-50 d-flex align-items-center justify-content-center rounded-start-4 border-end border-3'>
                    <img className='my-4 w-75' src={hospitalImg} />
                </div>
                <div className='container p-5 w-50'>
                    <p className='fw-bold text-center mb-5'>HMS LOGIN</p>
                    <div>
                        <div className='d-flex justify-content-between py-2 align-items-center'>
                            <label for="basic-url" className="form-label fw-bold mb-0" style={{fontSize:'small'}}>User ID : </label>
                            <input type="text" className="ms-4 p-2 px-3 border border-2 border-secondary-subtle fw-bold" style={{ width: '250px', fontSize:'small' }} id="patient-email" placeholder="Enter User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                        </div>

                        <div className='d-flex justify-content-between py-2 align-items-center'>
                            <label for="basic-url" className="form-label fw-bold mb-0" style={{fontSize:'small'}}>Password : </label>
                            <input type="password" className="ms-4 p-2 px-3 border border-2 border-secondary-subtle fw-bold" style={{ width: '250px', fontSize:'small' }} id="patient-email" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                    </div>

                    <div className='text-center mt-3'>
                        <span className='mt-3 mx-auto' style={{ color: 'rgb(2,48,106)', textDecoration: 'underline', fontSize:'small' }}>Forgot Password ? </span>
                    </div>

                    <Button variant="contained" style={{ width: '380px', backgroundColor: 'rgb(76, 77, 220)' }} className='mx-1 p-2 my-4 fw-bold text-capitalize' onClick={handleLogin}>Login</Button>
                    {/* <Button variant="outlined" style={{ width: '200px', color: 'rgb(2,48,106)' }} className='mx-1 my-3 fw-bold text-capitalize'>Reset</Button> */}


                    <div className='w-100 text-center'>
                        <div className='d-flex justify-content-center' style={{fontSize:'small'}}>
                            <span className='me-3'>Don't have an account ? </span>
                            <span className='fw-bold font-purple'>Signup</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default UserLogin;