import React, {useState, useRef} from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

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
import { useNavigate } from 'react-router-dom';

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

    const [patientId, setPatientId] = useState('PID-1');
    const [recordTitle, setRecordTitle] = useState(null);
    const [lang, setLang] = useState("English");
    const [recordType, setRecordType] = useState("Health Record");
    const [fileType, setFileType] = useState("PDF");
    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate("/user-login")
    }

    function extractDate(date) {
        return date["$d"].toJSON().split("T")[0]
    }

    const handleUpload = async (e) => {
		e.preventDefault();

        console.log('File:', fileInputRef.current.files[0]);
        console.log('File Name:', fileInputRef.current.files[0].name);
        console.log('Patient ID:', patientId);
        console.log('File Type:', fileType);
        console.log('Lang:', lang);
        console.log('Start Date:', extractDate(dayjs()));
        console.log('End Date:', extractDate(dayjs().add(2, 'day')));
        console.log('Display:', recordTitle);
        console.log('Record Type:', recordType);

        console.log(fileInputRef.current.files[0]);
		if(fileInputRef.current.files.length==0){
            console.log('No file selected');
            return;
        }
    
		const formData = new FormData();
        formData.append('file', fileInputRef.current.files[0]);
        formData.append('fileName', fileInputRef.current.files[0].name);
        formData.append('patientId', patientId);
        formData.append('fileType', fileType);
        formData.append('lang', lang);
        formData.append('startDate', extractDate(dayjs()));
        formData.append('endDate', extractDate(dayjs().add(2, 'day')));
        formData.append('display', recordTitle);
        formData.append('recordType', recordType);

		console.log(formData);
		try {
			const response = await axios.post(
				'http://localhost:8086/Team-10/medicalRecord/store-record',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			console.log(response.data);
            navigate("/doctor-appointment")
            // fileInputRef.current.value = ''; 
		} catch (error) {
			console.error('Error uploading file:', error);
            fileInputRef.current.value = ''; 
		}
	};

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
                                        <label className="font-small fw-bold form-label">Record Title</label>
                                        <input onChange={(e)=>{setRecordTitle(e.target.value)}} type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-small fw-bold form-label">Language</label>
                                        <input onChange={(e)=>{setLang(e.target.value)}} type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-small fw-bold form-label">Record Type</label>
                                        <input onChange={(e)=>{setRecordType(e.target.value)}} type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-small fw-bold form-label">File Type</label>
                                        <input onChange={(e)=>{setFileType(e.target.value)}} type="text" className="form-control text-secondary font-small" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-small fw-bold form-label">Upload File</label>
                                        <input
                                            className='form-control w-50'
                                            type='file'
                                            id='formFile'
                                            ref={fileInputRef}
                                        />
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
                                            onClick={handleUpload}
                                        >
                                            Upload file
                                        </Button>
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