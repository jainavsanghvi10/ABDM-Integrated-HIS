import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import docCollage from '../assets/images/doc-collage.jpeg'
import prescriptionImg from '../assets/images/prescription.svg'
import healthImg from '../assets/images/healthImg.svg'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const HealthRecord = () => {
    return (
        <>
            <div className='py-3 bg-signup'>
                <h3 className='text-center fw-bold mb-4'>Health Record</h3>
                <div className="container py-4 shadow-lg rounded-4" style={{ background: 'rgb(255, 229, 229)' }}>
                    <div className='d-flex'>
                        <div className='w-50 px-5 d-flex justify-content-center align-items-center'>
                            <img className='w-100 p-5' src={prescriptionImg} />
                        </div>
                        <form className='w-50 px-5'>
                            <div className="mb-3">
                                <label className="font-small fw-bold form-label">Type of Record</label>
                                <input type="text" placeholder='eg: Wellness Record' className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="font-small fw-bold form-label">Content Type</label>
                                <select id="disabledSelect" className="form-select text-secondary font-small">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="font-small fw-bold form-label">Language</label>
                                <select id="disabledSelect" className="form-select text-secondary font-small">
                                    <option>EN/IN</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="font-small fw-bold form-label">Type of Record</label>
                                <select id="disabledSelect" className="form-select text-secondary font-small">
                                    <option>Report</option>
                                </select>
                            </div>

                            <div className="mt-5 ">
                                <Button
                                    className='p-2 px-5 me-4 fw-bold'
                                    component="label"
                                    role={undefined}
                                    variant="outlined"
                                    style={{ color: '#4200FF', borderColor: '#4200FF', fontSize: 'small', textTransform: 'capitalize' }}
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" />
                                </Button>

                                <Button className='fw-bold p-2 px-5 text-capitalize' variant='contained' type="submit" style={{ background: 'rgb(66, 0, 255)' }}>Submit</Button>
                            </div>
                        </form>
                    </div>

                </div >
            </div >
        </>
    )
}

export default HealthRecord;