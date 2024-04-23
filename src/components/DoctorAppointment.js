import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import docicon from '../assets/images/small_devils_logo.png'
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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import Button from '@mui/material/Button';

const DoctorAppointment = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="container py-5 d-flex">
            <div className="w-25 pe-5">
                <div className="pb-4 d-flex align-items-center">
                    <img height='50px' src={docicon} />
                    <h5 className="fw-bold mb-0 ms-2">DocSwift</h5>
                </div>

                <Divider className='mb-4' style={{ height: '2px' }} />

                <div>
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

                        <div className='d-flex ms-2 my-4 align-items-center'>
                            <AssignmentIcon className='text-secondary' fontSize='small' />
                            <span className='ms-3 fw-bold text-secondary' style={{ fontSize: 'small' }}>Health Assessment</span>
                        </div>
                    </div>
                </div>

                <Divider className='mb-4' style={{ height: '2px' }} />

                <div>
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

            <div className='w-50 py-3'>
                <h5 className='fw-bold mb-4'>Scheduled Appointments</h5>

                <div className=''>
                    <div className='row justify-content-start text-start ps-3'>
                        <div className='col-3'>
                            <span className='text-secondary' style={{ fontSize: 'small' }}>Time Slot</span>
                        </div>
                        <div className='px-2 col-3 ms-3'>
                            <span className='text-secondary' style={{ fontSize: 'small' }}>Patient Name</span>
                        </div>
                        <div className='col-1 ms-3'>
                            <span className='text-secondary' style={{ fontSize: 'small' }}>Status</span>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>
                </div>

                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div className='row align-items-center'>
                                <div className='col-4'>
                                    <span className='mx-2 text-primary' style={{ fontSize: 'small' }}>17:00 - 17:30</span>
                                </div>
                                {/* <Avatar sx={{ width: 24, height: 24 }}/> */}
                                <div className='px-2 col-5'>
                                    <span className='ms-2 fw-bold text-primary' style={{ fontSize: 'small' }}>Dr. Dhinchak Pooja</span>
                                </div>
                                <div className='col-1'>
                                    <HighlightOffIcon className='px-0' fontSize='small' />
                                </div>
                                <div className='col-1'>
                                    <Fab variant="extended" size="small" color='primary'>
                                        <UploadIcon className='ms-1' sx={{ mr: 1 }} fontSize='small' />
                                        <span className='fw-bold me-2' style={{ fontSize: '11px', textTransform: 'capitalize' }}>Upload</span>
                                    </Fab>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-secondary fw-bold'>Purpose:</p>
                            <p style={{ fontSize: 'small' }} className='text-secondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.`1`

                            </p>
                            {/* <input class="form-control" type="file" id="formFile"></input> */}
                            <Fab className='me-4' variant="extended" size="small" color='primary'>
                                <UploadIcon className='ms-1' sx={{ mr: 1 }} fontSize='small' />
                                <span className='fw-bold me-2' style={{ fontSize: '11px', textTransform: 'capitalize' }}>Upload</span>
                            </Fab>
                            <Button variant="outlined" color='secondary' size='small' style={{ textTransform: 'capitalize' }}>Appointment Completed</Button>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div className='row align-items-center'>
                                <div className='col-4'>
                                    <span className='mx-2 text-primary' style={{ fontSize: 'small' }}>17:00 - 17:30</span>
                                </div>
                                <div className='px-2 col-5'>
                                    <span className='ms-2 fw-bold text-primary' style={{ fontSize: 'small' }}>Dr. Dhinchak Pooja</span>
                                </div>
                                <div className='col-1'>
                                    <DoneAllIcon className='px-0' fontSize='small' />
                                </div>
                                <div className='col-1'>
                                    <Fab variant="extended" size="small" color='primary'>
                                        <UploadIcon className='ms-1' sx={{ mr: 1 }} fontSize='small' />
                                        <span className='fw-bold me-2' style={{ fontSize: '11px', textTransform: 'capitalize' }}>Upload</span>
                                    </Fab>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-secondary fw-bold'>Purpose:</p>
                            <p style={{ fontSize: 'small' }} className='text-secondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                            <Button variant="contained" size='small' style={{ textTransform: 'capitalize' }}>Appointment Completed</Button>
                        </AccordionDetails>
                    </Accordion>


                </div>
            </div>

            <div className='w-25 d-flex justify-content-end'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar readOnly />
                </LocalizationProvider>
            </div>
        </div>
    );
}
export default DoctorAppointment;