import React, {useState, useEffect} from 'react';
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

const DoctorsList = () => {
    const [docCardsElement, setDocCardsElement] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      
        const createCards = async () => {
            const listDocs = await fetchAllDocs();
            console.log(listDocs)
            const tempElement = []
            for(let i=0;i<listDocs.length;i++){
                let doc = listDocs[i];
                if(doc.role === "doctor")
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
                    <Button onClick={()=>handleRedirect(doc.staffId)} className='d-block w-100' variant='contained' style={{ textTransform: 'capitalize', backgroundColor: '#4C4DDC' }}>
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

    return (
        <>
            <PatientNavbar />
            <div>
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
        </>
    );
}

export default DoctorsList;