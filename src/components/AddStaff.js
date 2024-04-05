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
    return (
        <>
            <div className="container d-flex flex-column align-items-center p-5">
                <h3 className="fw-bold font-blue">Manage Hospital Staff</h3>
                <hr style={{ width: '300px' }} />

                <div className="input-group my-3">
                    <input type="text" className="form-control fw-bold p-3" placeholder="Hospital Staff name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-secondary fw-bold p-3" type="button" id="button-addon2">
                        <SearchIcon className="mx-2" />
                        Search
                    </button>
                </div>

                {/* <Button variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 border-2 text-capitalize border-dark'></Button> */}

                <Button
                    variant="outlined"
                    style={{ color: 'rgb(2,48,106)' }}
                    className='my-3 fw-bold p-3 text-capitalize'
                    startDecorator={<Add />}
                    onClick={() => setOpen(true)}
                >
                    Add HealthCare Worker
                </Button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog>
                        <DialogTitle>Add a new HealthWorker</DialogTitle>
                        <DialogContent>Fill in the information of the HealthWorker.</DialogContent>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                setOpen(false);
                            }}
                        >
                            <Stack spacing={2}>
                                <FormControl>
                                    <FormLabel>HealthCare Worker ID</FormLabel>
                                    <Input autoFocus required />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>HealthCare Worker Name</FormLabel>
                                    <Input required />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Type</FormLabel>
                                    <Select >
                                        <Option value="doc">Doctor</Option>
                                        <Option value="nurse">Nurse</Option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Department</FormLabel>
                                    <Select >
                                        <Option value="dog">Dog</Option>
                                        <Option value="cat">Cat</Option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Designation</FormLabel>
                                    <Select >
                                        <Option value="Surgeon">Surgeon</Option>
                                        <Option value="Physician">Physician</Option>
                                    </Select>
                                </FormControl>
                                <Button type="submit">Submit</Button>
                            </Stack>
                        </form>
                    </ModalDialog>
                </Modal>

                <div className='container'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>ID</th>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>HealthCare Worker Name</th>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Type</th>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Department</th>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Designation</th>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Roles Assigned</th>
                                <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">IMT2020117</th>
                                <td>Rahul Jain</td>
                                <td>Doctor</td>
                                <td>New Department</td>
                                <td>New Designation</td>
                                <td>New Role</td>
                                <td>
                                    <IconButton aria-label="delete" size='small'>
                                        <DeleteIcon fontSize="inherit" color='secondary'/>
                                    </IconButton>
                                </td>
                            </tr>
                            {/* <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default AddStaff;