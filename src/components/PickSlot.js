import React, { useState, useEffect } from 'react';
import axios from "axios";
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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Input } from '@mui/material';

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
import { useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

// const shouldDisableTime = (value, view) => {
//     const hour = value.hour();
//     if (view === 'hours') {
//         return hour < 9 || hour > 13;
//     }
//     if (view === 'minutes') {
//         const minute = value.minute();
//         return minute > 20 && hour === 13;
//     }
//     return false;
// };

const PickSlot = () => {
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [staffId, setStaffId] = useState(null);
    const [docName, setDocName] = useState(null);
    const [docAge, setDocAge] = useState(null);
    const [patientId, setPatientId] = useState(null);

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setStaffId(urlParams.get('id'));
        if(!urlParams.get('id')){
            navigate('/doctors-list')
        }
    }, [])
    useEffect(() => {
        fetchStaffById();
    }, [staffId])

    const fetchStaffById = async () => {
        if (!staffId) return;
        try {
            const response = await axios.get(
                `http://localhost:8086/staff/${staffId}`
            );
            setDocName(response.data.name);
            setDocAge(response.data.age);
            return response.data
        } catch (error) {
            alert('Cannot Fetch');
        }
    };

    function timeAdder30(time) {
        const sp = time.split(":");
        if (sp[1] != "30") {
            return sp[0] + ":30:" + sp[2];
        }
        else {
            let hour = Number(sp[0]) + 1;
            if (hour < 10)
                hour = `0${hour}`;
            else
                hour = `${hour}`
            return hour + ":00:" + sp[2];
        }
    }

    const createAndBookAppointment = async () => {
        const start = extractTime(time);
        const end = timeAdder30(start);

        console.log(start, end);
        const appointmentData = {
            startTime: start,
            endTime: end,
            status: 0,
            date: extractDate(date)
        };

        await axios.post(`http://localhost:8086/doctor/${staffId}/createAppointment`, appointmentData)
            .then(response => {
                console.log("appointment created");
            })
            .catch(error => {
                alert("Appointment not created")
                console.error('Errors logging in:', error);
            });

        const response = await axios.get(`http://localhost:8086/doctor/${staffId}/getAppointments`)
        const appointmentList = response.data;
        const appointmentId = appointmentList[appointmentList.length - 1].appointmentId

        await axios.post(`http://localhost:8086/doctor/${staffId}/bookAppointment/${appointmentId}/${patientId}`, appointmentData)
            .then(response => {
                console.log(response.data);
                setShow(true);
            })
            .catch(error => {
                alert("Appointment not created")
                console.error('Errors logging in:', error);
            });
    }

    function extractDate(date) {
        return date["$d"].toJSON().split("T")[0]
    }
    function extractTime(time) {
        return time["$d"].toTimeString().split(" ")[0]
    }

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
            {show ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Here is a gentle confirmation that your action was successful.</Alert> : <></>}
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
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                Doctor List
                                </Typography>
                            </div>
                            
                            <div className='d-flex ms-2 my-4 align-items-center' 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/pick-slot')}}
                            >
                                <TodayIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' fontWeight="bold" style={{ fontSize: 'small', color: 'text.secondary' }}>
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
                <div className="container py-3 d-flex flex-wrap h-75 justify-content-around">
                    <Card className='shadow my-3 border' style={{ background: 'rgb(255,229,229' }} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={doctorSmile}
                        />
                        <CardContent>
                            <div>
                                <p className='fw-bold m-0'>{docName}</p>
                                <p className='text-secondary' style={{ fontSize: 'small' }}>Cardiologist | Mars Hospital</p>
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
                                        <p className='fw-bold m-0' style={{ fontSize: 'small' }}>{docAge}</p>
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
                            {/* <Button className='d-block w-100' variant='contained' style={{ textTransform: 'capitalize', backgroundColor: '#4C4DDC' }}>
                            Book Appointment
                        </Button> */}
                            <p className='fw-bold m-0' style={{ fontSize: 'small' }}>About Me</p>
                            <span className='text-secondary' style={{ fontSize: 'x-small' }}>Dr. Carly Angel is the top most immunologists specialist in Crist Hospital in London, UK. She achived several awards for her wonderful contribution </span>
                            <span className='text-primary' style={{ fontSize: 'x-small' }} >Read More. . . </span>
                        </CardContent>
                    </Card>

                    <div className='py-3 my-3 mx-4 px-5 rounded shadow border' style={{ backgroundColor: 'rgb(76 77 220 / 10%)' }}>
                        <p className='fw-bold'>Book Appointment</p>
                        <div className='d-flex'>
                            <div className='me-5'>
                                <p className='fw-bold' style={{ fontSize: 'x-small' }}>Select Date</p>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar className='shadow-sm mx-0 rounded' value={date} onChange={(newDate) => setDate(newDate)} />
                                </LocalizationProvider>
                            </div>
                            <div>
                                <p className='fw-bold' style={{ fontSize: 'x-small' }}>Select Hour</p>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DigitalClock
                                        skipDisabled
                                        minTime={dayjs(`${extractDate(date)}T09:00`)}
                                        maxTime={dayjs(`${extractDate(date)}T23:00`)}
                                        value={time}
                                        onChange={(newTime) => setTime(newTime)}
                                        timeStep={30}
                                        className='shadow-sm border rounded px-4'
                                    />
                                </LocalizationProvider>

                                <Input onChange={(e) => setPatientId(e.target.value)} placeholder='Patient ID' />

                                <div className='d-flex flex-column'>
                                    <Button className='mt-4'
                                        variant='contained'
                                        style={{ backgroundColor: 'black', fontSize: 'small', textTransform: 'capitalize' }}
                                        startIcon={<EventAvailableIcon />}
                                        onClick={createAndBookAppointment}
                                    >Book Slot</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PickSlot;