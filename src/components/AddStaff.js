import React, { useState } from 'react';
// import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import Add from '@mui/icons-material/Add';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const AddStaff = () => {
	const [open, setOpen] = React.useState(false);
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		type: '',
		department: '',
		designation: '',
	});
	const [staffList, setStaffList] = useState([
		{
			id: 'd100',
			name: 'Raj',
			type: 'Doctor',
			department: 'Cardiology',
			designation: 'Surgeon',
		},
		{
			id: 'n101',
			name: 'Riya',
			type: 'Nurse',
			department: 'Cardiology',
			designation: 'Nurse',
		},
		{
			id: 'd102',
			name: 'Rahul',
			type: 'Doctor',
			department: 'Orthopedics',
			designation: 'Physician',
		},
		{
			id: 'd103',
			name: 'Neha',
			type: 'Nurse',
			department: 'Orthopedics',
			designation: 'Nurse',
		},
	]);

	const handleChange = (e,fieldName) => {
		console.log(e);
        if(fieldName === 'name' || fieldName=='id'){
			console.log('Value:', e.target.value); // Check the value
			setFormData({
				...formData,
				[fieldName]: e.target.value
			});
		}else{
			console.log('Text Content:', e.target.textContent);
			setFormData({
				...formData,
				[fieldName]: e.target.textContent
			});
		}
    };
    

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data:', formData)
		setStaffList((prevList) => [...prevList, formData]);
		setFormData({
			id: '',
			name: '',
			type: '',
			department: '',
			designation: '',
		});
		setOpen(false);
		console.log('Staff List:', staffList);
	};

	const handleSearch = (e) => {
		e.preventDefault();

	}
	const handleDelete = (e,staffId) => {
		e.preventDefault();
		console.log("ID of Staff to delete: ",staffId);
		for(let i=0;i<staffList.length;i++){
			if(staffList[i].id === staffId){
				staffList.splice(i,1);
				break;
			}
		}
		setStaffList([...staffList]);
	}

	return (
		// <>
		<div className='container d-flex flex-column align-items-center p-5'>
			<h3 className='fw-bold font-blue'>Manage Hospital Staff</h3>
			<hr style={{ width: '300px' }} />

			<div className='input-group my-3'>
				<input
					type='text'
					className='form-control fw-bold p-3'
					placeholder='Hospital Staff name'
					aria-label="Recipient's username"
					aria-describedby='button-addon2'
				/>
				<button
					className='btn btn-secondary fw-bold p-3'
					type='button'
					id='button-addon2'
					onClick={handleSearch}
					>
					<SearchIcon className='mx-2' />
					Search
				</button>
			</div>

			<Button
				variant='outlined'
				style={{ color: 'rgb(2,48,106)' }}
				className='my-3 fw-bold p-3 text-capitalize'
				startDecorator={<Add />}
				onClick={() => setOpen(true)}>
				Add HealthCare Worker
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog>
					<DialogTitle>Add a new HealthWorker</DialogTitle>
					<DialogContent>
						Fill in the information of the HealthWorker.
					</DialogContent>
					<form onSubmit={handleSubmit}>
						<FormControl>
							<FormLabel>HealthCare Worker ID</FormLabel>
							<Input
								autoFocus
								required
								// id='id'
								onChange={(e)=>handleChange(e,'id')}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>HealthCare Worker Name</FormLabel>
							<Input
								required
								// id='name'
								onChange={(e)=>handleChange(e,'name')}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Type</FormLabel>
							<Select 
								// id='type' 
								// value={formData['type']} 
								onChange={(e)=>handleChange(e,'type')}
							>
								<Option value='Doctor'>Doctor</Option>
								<Option value='Nurse'>Nurse</Option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Department</FormLabel>
							<Select
								// id='department'
								// value={formData['department']}
								onChange={(e)=>handleChange(e,'department')}>
								<Option value='Dog'>Dog</Option>
								<Option value='Cat'>Cat</Option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Designation</FormLabel>
							<Select
								// id='designation'
								// value={formData['designation']}
								onChange={(e)=>handleChange(e,'designation')}>
								<Option value='Surgeon'>Surgeon</Option>
								<Option value='Physician'>Physician</Option>
							</Select>
						</FormControl>
						<Button type='submit' onSubmit={handleSubmit} >Submit</Button>
					</form>
				</ModalDialog>
			</Modal>

			<div className='container'>
				<table className='table table-bordered'>
					<thead>
						<tr>
							<th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								ID
							</th>
							<th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								HealthCare Worker Name
							</th>
							<th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								Type
							</th>
							<th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								Department
							</th>
							<th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								Designation
							</th>
							{/* <th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								Roles Assigned
							</th> */}
							<th
								scope='col'
								className='text-white p-3'
								style={{ backgroundColor: 'rgb(2,48,106)' }}>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{staffList.map((staff, index) => (
							<tr key={index}>
								<th scope='row'>{staff.id}</th>
								<td>{staff.name}</td>
								<td>{staff.type}</td>
								<td>{staff.department}</td>
								<td>{staff.designation}</td>
								{/* <td>Roles</td> */}
								<td>
									<IconButton aria-label='delete' size='small' onClick={(e)=>handleDelete(e,staff.id)}>
										<DeleteIcon fontSize='inherit' color='secondary' />
									</IconButton>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
		// </>
	);
};

export default AddStaff;