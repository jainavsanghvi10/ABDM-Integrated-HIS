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

const HealthRecord = () => {

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <>
            <div>
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
                </div>
            </div>
        </>
    )
}

export default HealthRecord;