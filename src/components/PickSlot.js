import * as React from 'react';
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

const shouldDisableTime = (value, view) => {
    const hour = value.hour();
    if (view === 'hours') {
        return hour < 9 || hour > 13;
    }
    if (view === 'minutes') {
        const minute = value.minute();
        return minute > 20 && hour === 13;
    }
    return false;
};



const PickSlot = () => {

    const [date, setDate] = React.useState(dayjs());
    

    return (
        <>
            <PatientNavbar />
            <div className="container py-3 d-flex flex-wrap">
                <Card className='shadow my-3 border' style={{ background: 'rgb(255,229,229' }} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={doctorSmile}
                    />
                    <CardContent>
                        <div>
                            <p className='fw-bold m-0'>Dr. Elia Anna</p>
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
                                    <p className='fw-bold m-0' style={{ fontSize: 'small' }}>11+</p>
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
                                    minTime={dayjs('2022-04-17T09:00')}
                                    timeStep={60}
                                    className='shadow-sm border rounded px-4'
                                />
                            </LocalizationProvider>
                            <div className='d-flex flex-column'>
                                <Button className='mt-4' variant='contained' style={{ backgroundColor: 'black', fontSize:'small', textTransform:'capitalize' }} startIcon={<EventAvailableIcon />}>Book Slot</Button>
                                <Button className='mt-2' variant='outlined' style={{ color: 'black', borderColor: 'black', fontSize:'small', textTransform:'capitalize' }} startIcon={<ArrowBackIcon />}>Go Back</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PickSlot;