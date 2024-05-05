import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import doctorSmile from '../assets/images/doctorSmiling.png'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import PatientNavbar from './Patient/PatientNavbar';
import SearchIcon from '@mui/icons-material/Search';

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

const DoctorsList = () => {
    const [docCardsElement, setDocCardsElement] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const createCards = async () => {
            const listDocs = await fetchAllDocs();
            if(!listDocs)
                return;
            console.log(listDocs)
            const tempElement = []
            for (let i = 0; i < listDocs.length; i++) {
                let doc = listDocs[i];
                if (doc.role === "doctor")
                    tempElement.push(
                        <Card key={doc.name} className='shadow-lg m-3' style={{ background: 'rgb(255,229,229' }} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image={doctorSmile}
                            />
                            <CardContent>
                                <div>
                                    <p className='fw-bold m-0'>{doc.name}</p>
                                    <p className='text-secondary' style={{ fontSize: 'small' }}>Cardiologist</p>
                                </div>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <PeopleAltRoundedIcon className='mb-2' style={{ color: '#4C4DDC' }} />
                                            <p className='fw-bold m-0' style={{ fontSize: 'small' }}>658+</p>
                                            <p className='text-secondary' style={{ fontSize: 'x-small' }}>Patients</p>
                                        </div>
                                    </div>

                                    <div className='col-3'>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <SignalCellularAltRoundedIcon className='mb-2' style={{ color: '#4C4DDC' }} />
                                            <p className='fw-bold m-0' style={{ fontSize: 'small' }}>{doc.age}</p>
                                            <p className='text-secondary' style={{ fontSize: 'x-small' }}>Experience</p>
                                        </div>
                                    </div>

                                    <div className='col-3'>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <StarRateRoundedIcon className='mb-2' style={{ color: '#4C4DDC' }} />
                                            <p className='fw-bold m-0' style={{ fontSize: 'small' }}>5</p>
                                            <p className='text-secondary' style={{ fontSize: 'x-small' }}>Rating</p>
                                        </div>
                                    </div>

                                    <div className='col-3'>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <ReviewsRoundedIcon className='mb-2' style={{ color: '#4C4DDC' }} />
                                            <p className='fw-bold m-0' style={{ fontSize: 'small' }}>300+</p>
                                            <p className='text-secondary' style={{ fontSize: 'x-small' }}>Reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <Button onClick={() => handleRedirect(doc.staffId)} className='d-block w-100' variant='contained' style={{ textTransform: 'capitalize', backgroundColor: '#4C4DDC' }}>
                                    Book Appointment
                                </Button>
                            </CardContent>
                        </Card>
                    )
            }
            setDocCardsElement(tempElement)
        }
        createCards();

    }, [])

    const handleRedirect = (index) => {
        navigate(`/pick-slot?id=${index}`)
    }

    const fetchAllDocs = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8086/staff/allStaff'
            );
            return response.data
        } catch (error) {
            alert('Cannot Fetch');
        }
    };

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
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Register Patient
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/doctors-list')}}
                            >
                                <ListIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' fontWeight="bold" style={{ fontSize: 'small', color: 'text.secondary' }}>
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
                <div className='p-3 w-100'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='input-group w-50 mx-auto mt-4'>
                            <input
                                type='text'
                                className='form-control p-3'
                                placeholder='Enter Doctor Name'
                                aria-label="Recipient's username"
                                aria-describedby='button-addon2'
                            />
                            <button
                                className='btn btn-secondary fw-bold p-3'
                                type='button'
                                style={{ backgroundColor: '#4C4DDC' }}
                            >
                                <SearchIcon className='mx-2' />
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="container py-3 d-flex flex-wrap">
                        {docCardsElement}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorsList;