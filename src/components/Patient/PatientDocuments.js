import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import PatientNavbar from './PatientNavbar';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import newFolderImg from '../../assets/images/newfolder.png'

const PatientDocuments = () => {
    return (
        <>
            <PatientNavbar />
            <div className="container d-flex flex-column align-items-center p-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control fw-bold p-3" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn bg-blue btn-secondary fw-bold p-3" type="button" id="button-addon2">
                        <SearchIcon className="mx-2" />
                        Search
                    </button>
                </div>

                {/* <div className='d-flex my-5 flex-wrap'> */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 3,
                            width: 300,
                            height: 340,
                        },
                    }}
                >
                    <Paper className='rounded' elevation={3}>
                        {/* <div className='bg-trans-blue' style={{ height: '200px' }}>
                            </div> */}
                        <Skeleton className="rounded" animation='wave' variant="rectangular" width={300} height={200} />

                        <Skeleton className="mt-3 mx-3 rounded" animation='wave' variant="rectangular" width={250} height={20} />
                        <Skeleton className="mt-3 mx-3 rounded" animation='wave' variant="rectangular" width={200} height={20} />

                        <div className='d-flex mt-3 justify-content-around'>
                            <ShareIcon className='border border-2 border-blue p-1 rounded' fontSize='large' />
                            <DeleteIcon className='border border-2 border-blue p-1 rounded' fontSize='large' />
                            <SaveAsIcon className='border border-2 border-blue p-1 rounded' fontSize='large' />
                        </div>

                    </Paper>



                    <Paper className='rounded d-flex justify-content-center align-items-center' style={{borderStyle:'dashed'}} elevation={0}>
                        <img src={newFolderImg} />
                    </Paper>
                </Box>
                {/* </div> */}
            </div>
        </>
    )
}

export default PatientDocuments;