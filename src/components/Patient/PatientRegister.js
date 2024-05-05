import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import hospitalImg from '../../assets/images/Group 160.png'
import { useNavigate } from 'react-router-dom';


import LogoutIcon from '@mui/icons-material/Logout';
import docicon from '../../assets/images/HEARTLOGO.png'
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

const PatientRegister = () => {
    const [name, setName] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        gender: '',
        dob: '',
        abhaAddress: '',
        name: ''
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
                'http://localhost:8086/patients/create',
                formData
            );
            const data = response.data;
            console.log(data);
            navigate("/doctors-list")
        } catch (error) {
            console.error('Error:', error);
        }
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
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Care Context Token
                                </Typography>
                            </div>
                            
                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/patient/register')}}
                            >
                                <HowToRegIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' fontWeight="bold" style={{ fontSize: 'small', color: 'text.secondary' }}>
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
                        <div className='w-50 d-flex align-items-center justify-content-center rounded-start-4 border-end border-3'>
                            <img className='my-4 w-100' src={hospitalImg} />
                        </div>

                        <div className='container p-5 w-50'>
                            <p className="fw-bold font-purple mb-3 ms-2" style={{ fontSize: 'large' }}>Patient Register</p>
                            {/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
                            <input type="text" className="my-2 p-3 border border-2 fw-bold" style={{ width: '350px', fontSize: 'small' }} id="username" onChange={handleChange} placeholder="Username">
                            </input>
                            <input type="text" className="my-2 p-3 border border-2 fw-bold" style={{ width: '350px', fontSize: 'small' }} id="name" onChange={handleChange} placeholder="Name">
                            </input>
                            <input type="text" className="my-2 p-3 border border-2 fw-bold" style={{ width: '350px', fontSize: 'small' }} id="email" onChange={handleChange} placeholder="Email Address">
                            </input>



                            <div className='d-flex'>
                                <select className="form-select my-2 p-3 border-2 fw-bold" style={{ width: '175px', fontSize: 'small' }} aria-label="Default select example" onChange={handleChange} value={formData['gender']} id='gender'>
                                    <option value="" selected>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>

                                <input type="date" className="my-2 p-3 border border-2 fw-bold" style={{ width: '175px', fontSize: 'small' }} id="dob" onChange={handleChange}>
                                </input>

                            </div>

                            <input type="text" className="my-2 p-3 border border-2  fw-bold" style={{ width: '350px', fontSize: 'small' }} id="abhaAddress" placeholder="ABHA Address" onChange={handleChange}>
                            </input>

                            <Button variant="outlined" size='small' style={{ color: '#4200FF', borderColor: '#4200FF', fontSize: 'small' }} className='my-3 fw-bold p-2 px-5 text-capitalize rounded-2' onClick={handleSubmit}>Submit</Button>

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
            </div>
        </>
    )
}

export default PatientRegister;