import React, { useState, useEffect} from 'react';
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
import TokenIcon from '@mui/icons-material/Token';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ListIcon from '@mui/icons-material/List';
import TodayIcon from '@mui/icons-material/Today';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';

const CareContext = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const [abhaAddress, setAbhaAddress] = useState('');
    const [otp, setOtp] = useState('');
    const [json, setJson] = useState(null);
    const [authMode, setAuthMode] = useState("MOBILE_OTP");

    
    async function fetchData() {
        try{
            console.log("fetching...")
            const response = await axios.get('http://localhost:8087/temp/get-all');
            const deleteResponse = await axios.delete('http://localhost:8087/temp/delete-all');
            console.log(deleteResponse.data);
            const parsedData = JSON.parse(response.data[response.data.length-1]["jsonString"])
            console.log(parsedData);
            setJson(parsedData);
        } catch (error) {
            alert('Cannot Fetch');
        }
    }

    async function handleNext(){
        if(step == 1){
            console.log("initializing...");
            const data = {
                "id": abhaAddress,
                "purpose": "KYC_AND_LINK",
                "requesterType": "HIP",
                "requesterId": "IN0610089630"
            }
            await axios.post('http://localhost:8087/record-to-abha-link/auth/fetch-modes', data)
                .then((response) => {
                    setTimeout(fetchData, 5000);
                    setStep(step + 1);
                })
                .catch((error) => {
                    alert('Care Context Not Initialized');
            });
        }
        if(step == 2){
            const data = {
                "id": abhaAddress,
                "purpose": "KYC_AND_LINK",
                "requesterType": "HIP",
                "requesterId": "IN0610089630",
                "authMode": authMode,
                "requestId": json["requestId"]
            }
        
            await axios.post('http://localhost:8087/record-to-abha-link/auth/init', data)
                .then((response) => {
                    setTimeout(fetchData, 5000);
                    setStep(step + 1);
                })
                .catch((error) => {
                    alert('OTP not sent');
            });
        }
    } 
    async function handleComplete(){
        const data = {
            "requestId": json["requestId"],
            "otp": otp
        }
        await axios.post('http://localhost:8087/record-to-abha-link/auth/confirm', data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                alert('Otp Incorrect or Expired');
        });
    }

	const handlePrevious = () => {
		setStep(step - 1);
	};

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/user-login');
    }

    return (
        <>
            <div className="px-3 py-3 d-flex align-items-center justify-content-between border-bottom border-3">
                <div className='d-flex align-items-center'>
                    <img height='30px' src={docicon} />
                    <h5 className="fw-bold mb-0 ms-2">DocSwift</h5>
                </div>
                <Button className='d-flex ms-2 align-items-center' style={{ borderColor: '#4200FF' }} variant="outlined">
                    <LogoutIcon className='font-purple' fontSize='small' />
                    <span className='ms-3 fw-bold font-purple' onClick={handleLogout} style={{ fontSize: 'small' }}>Logout</span>
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
                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/abha-generator')}}
                            >
                                <DashboardRoundedIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    ABHA Number
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/care-context')}}
                            >
                                <TokenIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' fontWeight="bold" style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Care Context Token
                                </Typography>
                            </div>
                            
                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/patient/register')}}
                            >
                                <HowToRegIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Register Patient
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/doctors-list')}}
                            >
                                <ListIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                Doctor List
                                </Typography>
                            </div>
                            
                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/pick-slot')}}
                            >
                                <TodayIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Appointment Booking
                                </Typography>
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

                                        <Input onChange={(e)=>{setAbhaAddress(e.target.value)}} placeholder='ABHA address'/>
                                    </div>
                                </Form.Group>
                            )}
                            {step === 2 && (
                                <Form.Group controlId='formStep1'>
                                    <div className='p-5 d-flex flex-column align-items-center'>
                                        <p className='fw-bold text-dark mb-3'>Initialize Care Context</p>

                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                style={{ fontSize: 'small', fontFamily: 'Montserrat' }}
                                                value={authMode}
                                                onChange={(e)=>{setAuthMode(e.target.value)}}
                                            >
                                                <FormControlLabel style={{ fontSize: 'small', fontFamily: 'Montserrat' }} value="DEMOGRAPHICS" control={<Radio />} label="DEMOGRAPHICS" />
                                                <FormControlLabel style={{ fontSize: 'small', fontFamily: 'Montserrat' }} value="MOBILE_OTP" control={<Radio />} label="MOBILE_OTP" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </Form.Group>
                            )}
                            {step === 3 && (
                                <Form.Group controlId='formStep2'>
                                    <div className='p-5 d-flex flex-column align-items-center '>
                                        <p className='fw-bold text-dark mb-5'>Otp Validation</p>

                                        <p className='text-muted mt-4 fw-bold'>Enter OTP</p>
                                        <div className='w-100'>
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                renderInput={(props) => <input {...props} />}
                                                inputStyle='mx-1 fw-bold text-muted fs-3 w-100 border-1 rounded'
                                                containerStyle=''
                                            />
                                        </div>
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
                                {step < 3 ? (
                                    <Button
                                        variant='contained'
                                        style={{ backgroundColor: '#4200FF' }}
                                        className='my-3 fw-bold p-2 px-5 text-capitalize'
                                        onClick={handleNext}
                                        >
                                        Next
                                    </Button>
                                ) : (
                                    <Button
                                        variant='contained'
                                        style={{ backgroundColor: '#4200FF' }}
                                        className='my-3 fw-bold p-2 px-5 text-capitalize'
                                        onClick={handleComplete}
                                        >
                                        Complete
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
