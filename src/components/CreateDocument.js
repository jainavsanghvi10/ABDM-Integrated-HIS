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

const CreateDocument = () => {
    return (
        <>
            <div className='py-3 bg-signup'>
                <h3 className='text-center fw-bold mb-4'>Medication Request</h3>
                <div className="container">

                    <Tabs className='shadow-lg rounded-4' style={{ background: 'rgb(255, 229, 229)' }} aria-label="Basic tabs" defaultValue={0} >
                        <TabList tabFlex='auto'>
                            <Tab className='p-3 fw-bold' style={{ color: '#4200FF' }}>Medication Request</Tab>
                            <Tab className='p-3 fw-bold' style={{ color: '#4200FF' }}>Health Record</Tab>
                        </TabList>
                        <TabPanel value={0}>
                            <div className='d-flex'>
                                <div className='w-50 px-5 d-flex flex-column justify-content-center align-items-center'>
                                    <img className='w-75' src={healthImg}></img>
                                    <div className='d-flex justify-content-around my-3 align-items-center'>
                                        <select id="disabledSelect" className="mx-2 w-100 form-select text-secondary font-small">
                                            <option>Disabled select</option>
                                        </select>
                                        <Button
                                            className='mx-2 w-100 fw-bold'
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
                                    </div>
                                </div>
                                <form className='w-50 px-5'>
                                    <div className="mb-3">
                                        <label className="font-small fw-bold form-label">Drug Name</label>
                                        <input type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-small fw-bold form-label">Disease Name</label>
                                        <input type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="mb-3 w-50">
                                            <label className="font-small fw-bold form-label">Dosage Instructions</label>
                                            <input type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label className="font-small fw-bold form-label">Additional Instructions</label>
                                            <select id="disabledSelect" className="form-select text-secondary font-small">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mb-3 w-50">
                                            <label className="font-small fw-bold form-label">Select Route</label>
                                            <select id="disabledSelect" className="form-select text-secondary font-small">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label className="font-small fw-bold form-label">Select Method</label>
                                            <select id="disabledSelect" className="form-select text-secondary font-small">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Button type="submit" className='my-3 fw-bold p-2 px-5 text-capitalize' variant='contained' style={{ background: 'rgb(66, 0, 255)' }}>Submit</Button>
                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel value={1}>
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

                                    <div className="mb-3">
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
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </>
    )
}

export default CreateDocument;