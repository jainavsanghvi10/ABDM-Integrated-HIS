import React, { useState } from 'react';
import { Form, ProgressBar } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Skeleton from '@mui/material/Skeleton';

const Generator = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    const [otp, setOtp] = useState('');

    return (
        <>
            <Form onSubmit={handleSubmit} className='container p-5'>
                <ProgressBar striped animated variant='success' now={(step / 3) * 100} />
                {step === 1 && (
                    <Form.Group controlId="formStep1">
                        <div className='p-5 d-flex flex-column align-items-center '>
                            <h3 className="fw-bold font-blue mb-5">Link Adhaar Number</h3>
                            {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
                            <input type="tel" className="form-control py-3 border-2 fw-bold" style={{ width: '500px' }} id="mobile-number" placeholder="Enter Adhaar Number" size="10">
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

                            {/* <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button> */}
                        </div>
                    </Form.Group>
                )}
                {step === 2 && (
                    <Form.Group controlId="formStep2">
                        <div className='p-5 d-flex flex-column align-items-center '>
                            <h3 className="fw-bold font-blue mb-5">Link Mobile Number</h3>
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

                            {/* <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button> */}
                        </div>
                    </Form.Group>
                )}
                {step === 3 && (
                    <Form.Group controlId="formStep3">
                        <div className='w-100 p-5 text-center'>
                            <h3 className="fw-bold font-blue mb-5">Generate ABHA Number</h3>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 400,
                                        height: 600,
                                    },
                                }}
                            >
                                <Paper elevation={3}>
                                    <div className="h-25 bg-blue mb-5">
                                        <Avatar className="border" style={{ background: 'rgb(2,48,106)', left: '125px', top: '80px', height: '150px', width: '150px' }} alt="Remy Sharp" src="" />
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '100px' }}>
                                        <QrCode2Icon style={{ height: '100px', width: '100px' }} />
                                        <Skeleton className="mt-3 rounded" animation='wave' variant="rectangular" width={300} height={20} />
                                        <Skeleton className="mt-3 rounded" animation='wave' variant="rectangular" width={300} height={20} />
                                        <Skeleton className="mt-3 rounded" animation='wave' variant="rectangular" width={300} height={20} />
                                        <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-5 fw-bold p-3 px-5 text-capitalize rounded-4'>
                                            Generate ABHA Number
                                        </Button>
                                    </div>

                                </Paper>
                            </Box>
                        </div>
                    </Form.Group>
                )}
                <div className="d-flex justify-content-around">
                    {step > 1 && (
                        <Button variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='my-3 fw-bold text-capitalize' onClick={handlePrevious}>
                            Previous
                        </Button>
                    )}
                    {step < 3 ? (
                        <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize' onClick={handleNext}>
                            Next
                        </Button>
                    ) : (
                        <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize' type="submit">
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
        </>
    );
};

export default Generator;