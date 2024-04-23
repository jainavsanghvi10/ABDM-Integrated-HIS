import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import doctorSmile from '../assets/images/doctorSmiling.png'

import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import PatientNavbar from './Patient/PatientNavbar';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import Add from '@mui/icons-material/Add';

const StaffAdmin = () => {

    return (
        <>
            <PatientNavbar />

            <div className='d-flex mx-5 px-5'>
                <div className='input-group w-50 my-3'>
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

                <Button
                    variant='outlined'
                    style={{ color: 'rgb(2,48,106)', borderColor:'rgb(2,48,106)' }}
                    className='my-3 ms-4  fw-bold p-3 text-capitalize'
                    startIcon={<AddIcon />}>
                    Add HealthCare Worker
                </Button>
            </div>


            <div className="container py-3 d-flex flex-wrap">
                <Card className='shadow-lg m-3' style={{ background: 'rgb(255,229,229' }} sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={doctorSmile}
                    />
                    <CardContent>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <p className='fw-bold m-0'>Dr. Elia Anna</p>
                                <p className='text-secondary' style={{ fontSize: 'small' }}>Cardiologist | Mars Hospital</p>
                            </div>
                            <div>
                                <Fab size="small" color="primary" aria-label="add" style={{ backgroundColor: '#4200FF' }}>
                                    <DeleteIcon />
                                </Fab>
                            </div>
                        </div>

                        {/* <Button className='d-block w-100' variant='contained' style={{ textTransform: 'capitalize', backgroundColor: '#4C4DDC' }}>
                            Book Appointment
                        </Button> */}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default StaffAdmin;