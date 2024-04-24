import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import doctorSmile from '../assets/images/doctorSmiling.png'
import PatientNavbar from './Patient/PatientNavbar';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const StaffAdmin = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [type, setType] = useState(null);

    const [docCardsElement, setDocCardsElement] = useState([]);

    useEffect(() => {
      
        const createCards = async () => {
            const listDocs = await fetchAllDocs();
            console.log(listDocs)
            const tempElement = []
            for(let i=0;i<listDocs.length;i++){
                let doc = listDocs[i];
                tempElement.push(
                    <Card key={doc.username} className='shadow-lg m-3' style={{ background: 'rgb(255,229,229' }} sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={doctorSmile}
                        />
                        <CardContent>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p className='fw-bold m-0'>{doc.username}</p>
                                    <p className='text-secondary' style={{ fontSize: 'small' }}>Cardiologist</p>
                                </div>
                                <div>
                                    <Fab size="small" color="primary" aria-label="add" style={{ backgroundColor: '#4200FF' }}>
                                        <DeleteIcon onClick={()=>deleteDoctor(doc.doctorId)} />
                                    </Fab>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            }
            setDocCardsElement(tempElement)
        }
        createCards();
      
    }, [])

    async function deleteDoctor(id) {
        try {
          const response = await axios.delete(`http://localhost:8086/doctor/delete/${id}`);
          window.location.reload();
        } catch (error) {
          console.error('Error deleting doctor:', error.message);
          return null;
        }
    }

	const handleCreateStaff = async (e) => {
        e.preventDefault();
        // console.log(username, password, type);
		try {
			const data = {
				username: username,
                password: password
			};

			const response = await axios.post(
				'http://localhost:8086/doctor/register',
				data
			);
            window.location.reload();
		} catch (error) {
			alert('Staff not created');
		}
	};

    const fetchAllDocs = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8086/doctor/allDoctors'
			);
            return response.data
		} catch (error) {
			alert('Cannot Fetch');
		}
	};

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
                    startIcon={<AddIcon />}
                    onClick={() => {setOpen(true)}}
                    >
                    Add HealthCare Worker
                </Button>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog>
					<DialogTitle>Add a new HealthWorker</DialogTitle>
					<DialogContent>
						Fill in the information of the HealthWorker.
					</DialogContent>
					<form onSubmit={handleCreateStaff}>
						<FormControl>
							<FormLabel>HealthCare Worker ID</FormLabel>
							<Input
								autoFocus
								required
								onChange={(e)=>setUsername(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>HealthCare Worker Name</FormLabel>
							<Input
								required
								onChange={(e)=>setPassword(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Type</FormLabel>
							<Select 
								id='type'
								onChange={(e)=>setType(e.target.value)}
							>
								<Option value='Doctor'>Doctor</Option>
								<Option value='Nurse'>Nurse</Option>
							</Select>
						</FormControl>
						<Button type='submit' >Submit</Button>
					</form>
				</ModalDialog>
			</Modal>


            <div className="container py-3 d-flex flex-wrap">
                {docCardsElement}
            </div>

        </>
    );
}

export default StaffAdmin;