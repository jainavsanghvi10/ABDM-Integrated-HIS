import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';
import JSEncrypt from 'jsencrypt';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Skeleton from '@mui/material/Skeleton';
import docsignupimg from '../assets/images/Group 160.png'
import aadhaarImg from '../assets/images/online_transaction.svg'
import aadhaarImg2 from '../assets/images/hire.svg'
// import signupBackground from '../assets/images/signupBackground.png'

import LogoutIcon from '@mui/icons-material/Logout';
import docicon from '../assets/images/HEARTLOGO.png'
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';

const CareContext = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [aadhaarNumber, setaadhaarNumber] = useState(undefined);
    const [mobileNumber, setMobileNumber] = useState(undefined);
    const [otp, setOtp] = useState('');
    const [txnId, setTxnId] = useState('');
    const [healthIdNumber, setHealthIdNumber] = useState('');
    // const [publicKey, setPublicKey] = useState('');
    const [otpDialogState, setOtpDialogState] = useState(false);

    // useEffect(() => {
    // const fetchPublicKey = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8087/abhaGenerator/publicKey');
    //         const publicKeyData = response.data; // Assuming the response contains a publicKey field
    //         console.log('Public Key:', publicKeyData);
    //         setPublicKey(publicKeyData);
    //     } catch (error) {
    //         console.error('Error fetching public key:', error);
    //     }
    // };

    // fetchPublicKey();
    // }, []);

    const encrypt = (plainText) => {
        const encryptor = new JSEncrypt();
        const publicKey = `-----BEGIN PUBLIC KEY-----
        MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAstWB95C5pHLXiYW59qyO4Xb+59KYVm9Hywbo77qETZVAyc6VIsxU+UWhd/k/YtjZibCznB+HaXWX9TVTFs9Nwgv7LRGq5uLczpZQDrU7dnGkl/urRA8p0Jv/f8T0MZdFWQgks91uFffeBmJOb58u68ZRxSYGMPe4hb9XXKDVsgoSJaRNYviH7RgAI2QhTCwLEiMqIaUX3p1SAc178ZlN8qHXSSGXvhDR1GKM+y2DIyJqlzfik7lD14mDY/I4lcbftib8cv7llkybtjX1AayfZp4XpmIXKWv8nRM488/jOAF81Bi13paKgpjQUUuwq9tb5Qd/DChytYgBTBTJFe7irDFCmTIcqPr8+IMB7tXA3YXPp3z605Z6cGoYxezUm2Nz2o6oUmarDUntDhq/PnkNergmSeSvS8gD9DHBuJkJWZweG3xOPXiKQAUBr92mdFhJGm6fitO5jsBxgpmulxpG0oKDy9lAOLWSqK92JMcbMNHn4wRikdI9HSiXrrI7fLhJYTbyU3I4v5ESdEsayHXuiwO/1C8y56egzKSw44GAtEpbAkTNEEfK5H5R0QnVBIXOvfeF4tzGvmkfOO6nNXU3o/WAdOyV3xSQ9dqLY5MEL4sJCGY1iJBIAQ452s8v0ynJG5Yq+8hNhsCVnklCzAlsIzQpnSVDUVEzv17grVAw078CAwEAAQ==
                            -----END PUBLIC KEY-----`;
        encryptor.setPublicKey(publicKey);
        const ciphertext = encryptor.encrypt(plainText);
        return ciphertext;
    };

    const handleAadhaarOTP = async () => {
        try {
            // Encrypt Aadhaar number
            let encryptedAadhaarNumber = encrypt(aadhaarNumber);
            const data = {
                aadhaar: encryptedAadhaarNumber,
            };

            // POST request to the server API
            const response = await axios.post(
                'http://localhost:8087/abhaGenerator/generateOTP',
                data
            );
            setOtpDialogState(true);
            const txnId = response.data;
            setTxnId(txnId);
        } catch (error) {
            alert('Invalid');
        }
    };

    const handleMobileOTP = () => {
        const data = {
            mobile: parseInt(mobileNumber),
            txnId: txnId,
        };

        // POST request to the server API
        axios
            .post('http://localhost:8087/abhaGenerator/generateMobileOTP', data)
            .then((response) => {
                response = response.data;
                const txnId = response.txnId;
                // setTxnId(txnId);
                if (!response.mobileLinked) {
                    setOtpDialogState(true);
                } else {
                    alert('Mobile Number already linked');
                }
            })
            .catch((error) => {
                alert('Invalid');
            });
    };

    const handleAbhaGeneration = () => {
        const data = {
            txnId: txnId,
        };

        // POST request to the server API
        axios
            .post('http://localhost:8087/abhaGenerator/generateAbhaNumber', data)
            .then((response) => {
                const healthId = response.data;
                setHealthIdNumber(healthId);
                // console.log('Health ID Number:', healthId);
                alert('Your Health ID / ABHA Number is ', healthId);
            })
            .catch((error) => {
                alert('Invalid');
            });
    };

    const handleNext = () => {
        if (step == 1) {
            let encryptedOTP = encrypt(otp);
            let data = {
                otp: encryptedOTP,
                txnId: txnId,
            };
            // POST request to the server API
            if (otpDialogState) {
                axios
                    .post('http://localhost:8087/abhaGenerator/verifyOTP', data)
                    .then((response) => {
                        const txnId = response.data;
                        // setTxnId(txnId);
                        // console.log('Transaction ID:', txnId);
                    })
                    .catch((error) => {
                        alert('Invalid OTP');
                    });
            }
            setOtpDialogState(false);
            setStep(step + 1);
        } else {
            // console.log(mobileNumber);
            let encryptedOTP = encrypt(otp);
            let data = {
                otp: encryptedOTP,
                txnId: txnId,
            };
            // POST request to the server API
            if (otpDialogState) {
                axios
                    .post('http://localhost:8087/abhaGenerator/verifyMobileOTP', data)
                    .then((response) => {
                        const txnId = response.data;
                        // setTxnId(txnId);
                        // console.log('Transaction ID:', txnId)
                    })
                    .catch((error) => {
                        alert('Invalid OTP');
                    });
            }
            setOtpDialogState(false);
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
        setOtpDialogState(false);
    };

    const handleRegister = () => {
        navigate('/patient/register')
    }

    const handleFetchModes = (e) => {
        e.preventDefault()
        console.log("init")
        let data = {
            id: "dhanvi.b1@sbx",
            purpose: "KYC_AND_LINK",
            requesterType: "HIP",
            requesterId: "IN0610089593"
        };
        axios.post('http://localhost:8087/auth/fetch-modes', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert('Init failed');
            });
    }
    const handleInit = (e) => {
        e.preventDefault()
        console.log("init")
        let data = {
            id: "dhanvi.b1@sbx",
            purpose: "KYC_AND_LINK",
            requesterType: "HIP",
            requesterId: "IN0610089593"
        };
        axios.post('http://localhost:8087/auth/init', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert('Init failed');
            });
    }
    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <>
            <div className="px-3 py-3 d-flex align-items-center justify-content-between border-bottom border-3">
                <div className='d-flex align-items-center'>
                    <img height='30px' src={docicon} />
                    <h5 className="fw-bold mb-0 ms-2">DocSwift</h5>
                </div>
                <Button className='d-flex ms-2 align-items-center' style={{ borderColor: '#4200FF' }} variant="outlined"
                    onClick={handleLogout}>
                    <LogoutIcon className='font-purple' fontSize='small' />
                    <span className='ms-3 fw-bold font-purple' style={{ fontSize: 'small' }}>Logout</span>
                </Button>
            </div>
            <div className="d-flex">
                <div className="w-sidebar pt-4 border-end border-3">

                    <div className='px-3'>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold'>Primary Menu</span>
                            <MoreVertIcon fontSize='small' />
                        </div>
                        <div className='py-2'>
                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <DashboardRoundedIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Dashboard</span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <WheelchairPickupIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Top Doctor's</span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <CalendarMonthIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Appointment</span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <ChatIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Messages</span>
                            </div>


                        </div>
                    </div>

                    <Divider className='mb-4' style={{ height: '2px' }} />

                    <div className='ps-3'>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold'>Profile</span>
                        </div>

                        <div className='py-2'>
                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <PersonIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Profile Settings</span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <NotificationsActiveIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Notification</span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <SettingsIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Help & Settings</span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <InfoIcon className='text-secondary' fontSize='small' />
                                <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>About DocSwift</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 bg-signup'>
                    <div className='d-flex w-75 mx-auto border shadow-lg rounded rounded-4' style={{ background: 'rgb(255, 229, 229)' }}>
                        <div className='w-50 d-flex flex-column align-items-center justify-content-center rounded-start-4 border-end border-3'>
                            <img className='w-75 my-4' src={aadhaarImg2} />
                            <img className='w-75 my-4' src={aadhaarImg} />
                        </div>
                        <Form className='container p-5 w-50'>
                            <ProgressBar striped animated variant='success' style={{ color: 'rgb(255, 229, 229)' }} now={(step / 2) * 100} />
                            {step === 1 && (
                                <Form.Group controlId='formStep1'>
                                    <div className='p-5 d-flex flex-column align-items-center'>
                                        <p className='fw-bold text-dark mb-3'>Initialize Care Context</p>

                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                style={{ fontSize: 'small', fontFamily: 'Montserrat' }}
                                            >
                                                <FormControlLabel style={{ fontSize: 'small', fontFamily: 'Montserrat' }} value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel style={{ fontSize: 'small', fontFamily: 'Montserrat' }} value="male" control={<Radio />} label="Male" />
                                            </RadioGroup>
                                        </FormControl>

                                        <Button
                                            variant='outlined'
                                            style={{ color: '#4200FF', borderColor: '#4200FF', fontSize: 'small' }}
                                            className='my-3 fw-bold text-capitalize'
                                            onClick={handleAadhaarOTP}>
                                            INIT
                                        </Button>
                                        {otpDialogState ? (
                                            <>
                                                <p className='text-muted mt-4 fw-bold'>Enter OTP</p>

                                                <div className='w-50'>
                                                    <OtpInput
                                                        value={otp}
                                                        onChange={setOtp}
                                                        numInputs={6}
                                                        renderInput={(props) => <input {...props} />}
                                                        inputStyle='m-2 fw-bold text-muted fs-3 w-100 border-1 rounded'
                                                        containerStyle='mx-5'
                                                    />
                                                </div>
                                            </>
                                        ) : null}

                                        {/* <Button variant="contained" style={{ backgroundColor: '#4200FF' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button> */}
                                    </div>
                                </Form.Group>
                            )}
                            {step === 2 && (
                                <Form.Group controlId='formStep2'>
                                    <div className='p-5 d-flex flex-column align-items-center '>
                                        <p className='fw-bold text-dark mb-5'>Link Mobile Number</p>
                                        {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
                                        {/* <input
                                            type='tel'
                                            className='form-control py-3 border-2 fw-bold'
                                            style={{ width: '400px', fontSize: 'small' }}
                                            id='mobile-number'
                                            placeholder='Enter Mobile Number'
                                            size='10'
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}></input> */}

                                        <Button
                                            variant='outlined'
                                            style={{ color: '#4200FF' }}
                                            className='mb-3 fw-bold text-capitalize'
                                            onClick={handleMobileOTP}>
                                            Send OTP
                                        </Button>

                                        <p className='text-muted mt-4 fw-bold'>Enter OTP</p>
                                        <div className='w-100'>
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                // renderSeparator={<span>-</span>}
                                                renderInput={(props) => <input {...props} />}
                                                inputStyle='mx-1 fw-bold text-muted fs-3 w-100 border-1 rounded'
                                                containerStyle=''
                                            // inputType='tel'
                                            />
                                        </div>

                                        {/* <Button variant="contained" style={{ backgroundColor: '#4200FF' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button> */}
                                    </div>
                                </Form.Group>
                            )}
                            <div className='d-flex justify-content-around'>
                                {step > 1 && (
                                    <Button
                                        variant='outlined'
                                        style={{ color: '#4200FF', borderColor: '#4200FF' }}
                                        className='my-3 fw-bold text-capitalize'
                                        onClick={handlePrevious}>
                                        Previous
                                    </Button>
                                )}
                                {step < 2 ? (
                                    <Button
                                        variant='contained'
                                        style={{ backgroundColor: '#4200FF' }}
                                        className='my-3 fw-bold p-2 px-5 text-capitalize'
                                        onClick={handleNext}>
                                        Next
                                    </Button>
                                ) : (
                                    <Button
                                        variant='contained'
                                        style={{ backgroundColor: '#4200FF' }}
                                        className='my-3 fw-bold p-2 px-5 text-capitalize'
                                        onClick={handleRegister}>
                                        Register
                                    </Button>
                                )}
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareContext;