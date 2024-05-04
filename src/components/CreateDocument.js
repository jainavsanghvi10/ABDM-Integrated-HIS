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

import LogoutIcon from '@mui/icons-material/Logout';
import docicon from '../assets/images/HEARTLOGO.png'
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

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
    }


    return (
        <>
            <div className="px-3 py-3 d-flex align-items-center justify-content-between border-bottom border-3">
                <div className='d-flex align-items-center'>
                    <img height='30px' src={docicon} />
                    <h5 className="fw-bold mb-0 ms-2">DocSwift</h5>
                </div>
                <Button className='d-flex ms-2 align-items-center' style={{ borderColor: '#4200FF' }} variant="outlined"
                    onClick={handleLogout}>
                    <LogoutIcon className='font-purple' fontSize='small' />
                    <span className='ms-3 fw-bold font-purple' style={{ fontSize: 'small' }}>Logout</span>
                </Button>
            </div>
            <div className="d-flex">
                <div className="w-sidebar pt-4 border-end border-3">

                    <div className='px-3'>
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


                        </div>
                    </div>

                    <Divider className='mb-4' style={{ height: '2px' }} />

                    <div className='ps-3'>
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
                <div className='py-3 bg-signup'>
                    <div className="container">

                        <Tabs className='shadow-lg rounded-4' style={{ background: 'rgb(255, 229, 229)' }} aria-label="Basic tabs" defaultValue={0} >
                            <TabList tabFlex='auto'>
                                <Tab className='p-3 fw-bold' style={{ color: '#4200FF' }}>Medication Request</Tab>
                            </TabList>
                            <TabPanel value={0}>
                                <div className='d-flex'>
                                    <div className='w-50 px-5 d-flex flex-column justify-content-center align-items-center'>
                                        <img className='w-75' src={healthImg}></img>

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
                                            <div className="mb-3 w-50 me-2">
                                                <label className="font-small fw-bold form-label">Dosage Instructions</label>
                                                <input type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 w-50 ms-2">
                                                <label className="font-small fw-bold form-label">Additional Instructions</label>
                                                <select id="disabledSelect" className="form-select text-secondary font-small">
                                                    <option>Disabled select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mb-3 w-50 me-2">
                                                <label className="font-small fw-bold form-label">Select Route</label>
                                                <select id="disabledSelect" className="form-select text-secondary font-small">
                                                    <option>Disabled select</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 w-50 ms-2">
                                                <label className="font-small fw-bold form-label">Select Method</label>
                                                <select id="disabledSelect" className="form-select text-secondary font-small">
                                                    <option>Disabled select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <label className="mt-3 font-small fw-bold form-label">Health Record </label>
                                        <div className='d-flex justify-content-around align-items-center'>
                                            <select id="disabledSelect" className="me-2 w-100 form-select text-secondary font-small">
                                                <option>Disabled select</option>
                                            </select>
                                            <Button
                                                className='ms-2 w-100 fw-bold'
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

                                        <Button type="submit" className='mt-5 my-4 fw-bold p-2 px-5 text-capitalize' variant='contained' style={{ background: 'rgb(66, 0, 255)' }}>Submit</Button>
                                    </form>
                                </div>
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateDocument;