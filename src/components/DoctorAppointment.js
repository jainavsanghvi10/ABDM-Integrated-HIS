import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

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
import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';

import Fab from '@mui/material/Fab';
import UploadIcon from '@mui/icons-material/Upload';
import Switch from '@mui/material/Switch';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

import Rating from '@mui/material/Rating';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const DoctorAppointment = () => {
    const { loginStatus, did, loginFunc } = useAuth();
    const navigate = useNavigate();

    const [docName, setDocName] = useState('Loading...')
    const [docId, setDocId] = useState(null)
    const [appointmentList, setAppointmentList] = useState([])
    const [patientCardElement, setPatientCardElement] = useState([]);

    useEffect(() => {
        const fetchStaffByToken = async (token) => {
            const data = {
                jwtToken: token
            }
            axios.post('http://localhost:8088/auth/getUserByToken', data)
                .then(response => {
                    setDocId(response.data.id);
                    setDocName(response.data.username);
                })
                .catch(error => {
                    alert("Invalid Credential")
                    console.error('Errors logging in:', error);
                });
        };

        const token = localStorage.getItem('token');
        // console.log(token)
        if (token)
            fetchStaffByToken(token);
        // else
        // navigate('/user-login')
    }, [])


    useEffect(() => {
        if (appointmentList != null)
            handleFetchAppointments();
    }, [appointmentList])
    useEffect(() => {
        if (docId != null)
            fetchAppointments();
    }, [docId])

    async function fetchAppointments() {
        try {
            const response = await axios.get(
                `http://localhost:8086/doctor/${docId}/getAppointments`
            );
            console.log(response.data);
            setAppointmentList(response.data);
            return response.data
        } catch (error) {
            alert('Cannot Fetch');
        }
    }

    async function handleAppointmentStatus(a) {
        const appointmentData = {
            startTime: a.startTime,
            endTime: a.endTime,
            status: 1,
            date: a.date
        };
        await axios.post(`http://localhost:8086/doctor/${docId}/updateAppointment/${a.appointmentId}`, appointmentData)
            .then(response => {
                console.log("appointment status updated");
            })
            .catch(error => {
                alert("Appointment status not updated");
                console.error('Errors logging in:', error);
            });
        // window.location.reload()
    }

    async function handleFetchAppointments() {
        // console.log("form appointments")
        const tempElement = [];
        for (let i = 0; i < appointmentList.length; i++) {
            let a = appointmentList[i];
            let start = a.startTime.split(":").slice(0, 2).join(":")
            let end = a.endTime.split(":").slice(0, 2).join(":")

            tempElement.push(
                <Accordion key={a.appointmentId}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <div className='row align-items-center w-100'>
                            <div className='col-3'>
                                <span className='mx-2 font-blue' style={{ fontSize: 'small' }}>{start} - {end}</span>
                            </div>
                            <div className='px-2 col-5'>
                                <span className='ms-2 fw-bold font-blue' style={{ fontSize: 'small' }}>User {a.appointmentId}</span>
                            </div>
                            {a.status ?
                                <div className='col-2 d-flex'>
                                    <DoneAllIcon className='px-0 font-green' fontSize='small' />
                                    <span className='ms-2 font-green fw-bold' style={{ fontSize: 'small' }}>Completed</span>
                                </div>
                                :
                                <div className='col-2 d-flex'>
                                    <PendingOutlinedIcon className='px-0 font-grey' fontSize='small' />
                                    <span className='ms-2 font-grey fw-bold' style={{ fontSize: 'small' }}>Pending</span>
                                </div>
                            }
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='text-secondary fw-bold'>Purpose:</p>
                        <p style={{ fontSize: 'small' }} className='text-secondary'>
                            Cough and Cold
                        </p>
                        {/* <input class="form-control" type="file" id="formFile"></input> */}
                        <Fab className='me-4 rounded' variant="extended" size="small" color='primary'>
                            <UploadIcon className='ms-1' sx={{ mr: 1 }} fontSize='small' />
                            <span className='fw-bold me-2' style={{ fontSize: '11px', textTransform: 'capitalize' }}>Upload</span>
                        </Fab>
                        <Button
                            variant="outlined"
                            color='secondary'
                            size='small'
                            style={{ textTransform: 'capitalize', color: 'black', borderColor: 'black' }}
                            onClick={() => { handleAppointmentStatus(a) }}
                        >Appointment Completed</Button>
                    </AccordionDetails>
                </Accordion>
            )
        }
        setPatientCardElement(tempElement);
    }

    const [rating, setRating] = React.useState(4);

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <>
            <div>
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
                    {/* <button onClick={fetchAppointments}>Update Appointment</button> */}
                    <div className="w-sidebar me-3 pt-4 border-end border-3">

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

                    <div className='flex-fill w-50 py-3'>
                        <div className='mb-4'>
                            <span className='fw-bold text-secondary'>Welcome, </span>
                            <span className='fw-bold font-purple'> {docName}</span>
                        </div>

                        <div className='d-flex'>
                            <div className='w- me-5'>
                                <div className='d-flex'>
                                    <AccessibleOutlinedIcon className='font-purple' fontSize='large' />
                                    <div className='ms-3 font-grey'>
                                        <p className='mb-0 fw-bold' style={{ fontSize: 'small' }}>3000</p>
                                        <p style={{ fontSize: 'x-small' }}>Patients Treated</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-25'>
                                <div className='d-flex'>
                                    {/* <AccessibleOutlinedIcon className='font-purple' fontSize='large'/> */}
                                    <VerifiedIcon className='font-purple' fontSize='large' />

                                    <div className='ms-3 font-grey'>
                                        <p className='mb-0 fw-bold' style={{ fontSize: 'small' }}>Ratings</p>
                                        {/* <p style={{ fontSize: 'x-small' }}>Patients Treated</p> */}
                                        <Rating name="read-only" value={rating} size='small' readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='my-4 fw-bold'>Scheduled Appointments</p>

                        <div className=''>
                            <div className='row align-items-center w-100'>
                                <div className='col-3'>
                                    <span className='ms-4 text-secondary' style={{ fontSize: 'small' }}>Time Slot</span>
                                </div>
                                <div className='px-2 col-5'>
                                    <span className='ms-2 text-secondary' style={{ fontSize: 'small' }}>Patient Name</span>
                                </div>
                                <div className='col-2 d-flex'>
                                    <span className='ms-2 text-secondary' style={{ fontSize: 'small' }}>Status</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            {patientCardElement}
                        </div>
                    </div>

                    <div className='flex-fill d-flex justify-content-end mx-0 px-0'>
                        <div className='border border-top-0 border-3'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar readOnly className='mx-0 px-0 border-bottom border-3' />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DoctorAppointment;