import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import docicon from '../assets/images/HEARTLOGO.png';
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
import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';

import Fab from '@mui/material/Fab';
import UploadIcon from '@mui/icons-material/Upload';
import Switch from '@mui/material/Switch';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';

import Rating from '@mui/material/Rating';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import LayersClearIcon from '@mui/icons-material/LayersClear';

const DoctorAppointment = () => {
	const { loginStatus, did, loginFunc } = useAuth();
	const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [currPatient, setCurrPatient] = useState(null);
    const [currAppointment, setCurrAppointment] = useState(null);
    const [enteredPid ,setEnteredPid] = useState('');

	const [docName, setDocName] = useState('Loading...');
	const [docId, setDocId] = useState(null);
	const [appointmentList, setAppointmentList] = useState();
	const [patientCardElement, setPatientCardElement] = useState([]);
	const [selectedFile, setSelectedFile] = useState(null);
	const [fileName, setFileName] = useState('');
	const [viewFile, setViewFile] = useState(false);
	const [patientId, setPatientId] = useState('PID-1');

	const fileInputRef = useRef(null);
	const [patientDocumentDetails, setPatientDocumentDetails] = useState([]);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button> */}
            <VerifiedIcon className='font-green me-2 '/>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    useEffect(() => {
        const fetchStaffByToken = async (token) => {
            const data = {
                jwtToken: token
            }
            const response = await axios.post('http://localhost:8088/auth/getUserByToken', data)
            const listDocs = await fetchAllDocs();
            let currDoc = null;
            for (let d of listDocs) {
                if (d.username === response.data.username) {
                    currDoc = d;
                }
            }
            // console.log(currDoc);
            setDocName(currDoc.username);
            setDocId(currDoc.doctorId);
        };

		const token = localStorage.getItem('token');
		// console.log(token)
		if (token) fetchStaffByToken(token);
		// else
		// navigate('/user-login')
	}, []);

    useEffect(() => {
        if (appointmentList)
            handleFetchAppointments();
    }, [appointmentList])
    useEffect(() => {
        if (docId)
            fetchAppointments();
    }, [docId])

    const fetchPatient = async (pid) => {
        try {
            const response = await axios.get(
                `http://localhost:8086/patients/${pid}`
            );
            console.log(response.data);
            return response.data
        } catch (error) {
            alert('Cannot Fetch');
        }
    }

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

	const handleUploadNavigate = () => {
		console.log('upload');
		navigate(`/health-record?pid=${patientId}`);
	};

	async function fetchAppointments() {
		try {
			const response = await axios.get(
				`http://localhost:8086/doctor/${docId}/getAppointments`
			);
			console.log(response.data);
			setAppointmentList(response.data);
			return response.data;
		} catch (error) {
			alert('Cannot Fetch');
		}
	}

	async function handleAppointmentStatus(a ,status) {
        console.log(a.startTime,a.endTime,status,a.date)
		const appointmentData = {

			startTime: a.startTime,
			endTime: a.endTime,
			status: status,
			date: a.date,
		};
		await axios
			.put(
				`http://localhost:8086/doctor/${docId}/updateAppointment/${a.appointmentId}`,
				appointmentData
			)
			.then((response) => {
				console.log('appointment status updated');
			})
			.catch((error) => {
				alert('Appointment status not updated');
				console.error('Errors logging in:', error);
			});
		window.location.reload()
	}

	async function handleConsentRequest() {
		const data = {
			requestId: 'feea6181-a4f0-4222-866d-9193db1f10f4',
			timestamp: '2024-05-05T15:30:00Z',
			consent: {
				purpose: {
					text: 'string',
					code: 'CAREMGT',
				},
				patient: {
					id: 'jainav.jain@sbx',
				},
				hiu: {
					id: 'IN0610089630',
				},
				requester: {
					name: 'Dr. Anurag',
					identifier: {
						type: 'REGNO',
						value: 'MH1001',
						system: 'https://www.mciindia.org',
					},
				},
				hiTypes: [
					// "DiagnosticReport"
					'Prescription',
					'DischargeSummary',
					'OPConsultation',
					'ImmunizationRecord',
					'WellnessRecord',
					'HealthDocumentRecord',
				],
				permission: {
					accessMode: 'VIEW',
					dateRange: {
						from: '2024-01-25T12:52:34.925Z',
						to: '2024-02-14T12:52:34.925Z',
						// "from": "2023-05-22T20:09:50.592Z",
						// "to": "{{$isoTimestamp}}"
					},
					dataEraseAt: '2024-12-25T12:52:34.925Z',
					frequency: {
						unit: 'HOUR',
						value: 1,
						repeats: 0,
					},
				},
			},
		};

		const response = await axios.post(
			'http://localhost:8087/consent-request',
			data
		);
		console.log(response);
	}
	async function handleFetchRequest() {
		console.log('Fetching Files of Patient ID -', patientId);
		try {
			const response = await axios.get(
				`http://localhost:8086/Team-10/medicalRecord/patient/${patientId}`
			);
			console.log(response.data);
			setPatientDocumentDetails(response.data);
		} catch (error) {
			console.error('Error fetching document details: ', error);
		}
		// navig'ate(`/health-record/view?url=${downloadURL}`);
	}
    const handleViewClick = () => {
		setViewFile(true);
        console.log('Viewing File',patientDocumentDetails[0].downloadURL);
	};
    const handleClearClick = () => {
		setViewFile(false);
        console.log('Clearing File');
	};
    const handleRemoveRequest = () => {
		setPatientDocumentDetails([]);
        console.log('Clearing Patient Documents');
	};

    async function handleVerifyPid(e){
        e.preventDefault();
        if(enteredPid === currPatient){
            await handleAppointmentStatus(currAppointment, 1);
            handleClick();
            setOpenModal(false);
        }
    }

	async function handleFetchAppointments() {
		const tempElement = [];
        if(!appointmentList) return;
		for (let i = 0; i < appointmentList.length; i++) {
			let a = appointmentList[i];
			let start = a.startTime.split(':').slice(0, 2).join(':');
			let end = a.endTime.split(':').slice(0, 2).join(':');

            const patient = await fetchPatient(a.patientId);

            tempElement.push(
                <Accordion key={a.appointmentId}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <div className='row align-items-center w-100'>
                            <div className='col-3'>
                                <span className='mx-2 font-blue' style={{ fontSize: 'small' }}>{start} - {end}</span>
                            </div>
                            <div className='px-2 col-5'>
                                <span className='ms-2 fw-bold font-blue' style={{ fontSize: 'small' }}>{patient.name}</span>
                            </div>
                            {a.status == 2 ?
                                <div className='col-2 d-flex'>
                                    <DoneAllIcon className='px-0 font-green' fontSize='small' />
                                    <span className='ms-2 font-green fw-bold' style={{ fontSize: 'small' }}>Completed</span>
                                </div> : <></>}
                            {a.status == 1 ?
                                <div className='col-2 d-flex'>
                                    <PendingActionsIcon className='px-0 font-purple' fontSize='small' />
                                    <span className='ms-2 font-purple fw-bold' style={{ fontSize: 'small' }}>Ongoing</span>
                                </div> : <></>}
                            {a.status == 0 ?
                                <div className='col-2 d-flex'>
                                    <PendingOutlinedIcon className='px-0 text-secondary' fontSize='small' />
                                    <span className='ms-2 text-secondary fw-bold' style={{ fontSize: 'small' }}>Pending</span>
                                </div> : <></>}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='text-secondary fw-bold'>Purpose:</p>
                        <p style={{ fontSize: 'small' }} className='text-secondary'>
                            Cough and Cold
                        </p>
                        {/* <input class="form-control" type="file" id="formFile"></input> */}
                        {/* <Fab className='me-4 rounded' variant="extended" size="small" color='primary'>
                            <UploadIcon className='ms-1' sx={{ mr: 1 }} fontSize='small' />
                            <span className='fw-bold me-2' style={{ fontSize: '11px', textTransform: 'capitalize' }}>Upload</span>
                        </Fab> */}
						<form>
							<div
								className='py-3'
								style={{ display: 'flex', alignItems: 'center' }}>
								<Button
									className='me-4 rounded bg-purple text-white'
									variant='extended'
									size='small'
									onClick={handleUploadNavigate}>
									<UploadIcon
										className='ms-1'
										sx={{ mr: 1 }}
										fontSize='small'
									/>
									Upload
								</Button>
								<Button
									className='me-4 rounded bg-purple text-white'
									variant='extended'
									size='small'
									onClick={handleConsentRequest}>
									<CloudDownloadIcon
										className='ms-1'
										sx={{ mr: 1 }}
										fontSize='small'
									/>
									Request
								</Button>
                                </div>
                                <div
								className='pb-3'
								style={{ display: 'flex', alignItems: 'center' }}>
								<Button
									className='me-4 rounded bg-purple text-white'
									variant='extended'
									size='small'
									onClick={handleFetchRequest}>
									<HistoryIcon
										className='ms-1'
										sx={{ mr: 1 }}
										fontSize='small'
									/>
									Previous Patient Files
								</Button>
								<Button
									className='me-4 rounded bg-purple text-white'
									variant='extended'
									size='small'
									onClick={handleRemoveRequest}>
									<LayersClearIcon
										className='ms-1'
										sx={{ mr: 1 }}
										fontSize='small'
									/>
									Clear
								</Button>
							</div>
						</form>
                        {a.status == 0 ?
                        <Button
                            variant="outlined"
                            color='secondary'
                            style={{ textTransform: 'capitalize', color: '#4200FF', borderColor: '#4200FF' }}
                            className='p-3 my-4 me-3 fw-bold'
                            onClick={() => {setOpenModal(true); setCurrPatient(patient.patientId); setCurrAppointment(a);}}
                            >
                            Start Appointment
                        </Button> : <></>}
						{a.status == 1 ? <Button
							variant='outlined'
							color='secondary'
							style={{
								textTransform: 'capitalize',
								color: '#4200FF',
								borderColor: '#4200FF',
							}}
							className='p-3 my-4 fw-bold'
							onClick={() => {
								handleAppointmentStatus(a, 2);
							}}>
							Appointment Completed
						</Button> : <></>}
					</AccordionDetails>
				</Accordion>
			);
		}
        console.log(tempElement)
		setPatientCardElement(tempElement);
	}

	const [rating, setRating] = React.useState(4);

	function handleLogout() {
		localStorage.removeItem('token');
		navigate('/user-login');
	}

    async function handleFileFetch(){
        const baseUrl86 = "https://q24csh3m-8086.inc1.devtunnels.ms/"
        const baseUrl87 = "https://q24csh3m-8087.inc1.devtunnels.ms/"

        const dataPushResponse = await axios.post("http://localhost:8087/request-data-share-url");
        console.log(dataPushResponse.data)
        const data = {
            "recordReferences": ["MED-RECORD-1", "MED-RECORD-2"],
            "url": dataPushResponse.data.url
        }

        const response = await axios.post(baseUrl86 + "transfer/get-fhir-bundle", data);

        console.log(response.data);
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
                    {/* <button onClick={fetchAppointments}>Update Appointment</button> */}
                    <div className="w-sidebar me-3 pt-4 border-end border-3">
                        <div>
                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <WheelchairPickupIcon
                                    className='text-secondary'
                                    fontSize='small'
                                />
                                <span
                                    className='ms-3 fw-bold text-secondary'
                                    style={{ fontSize: 'small' }}>
                                    Top Doctor's
                                </span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <CalendarMonthIcon
                                    className='text-secondary'
                                    fontSize='small'
                                />
                                <span
                                    className='ms-3 fw-bold text-secondary'
                                    style={{ fontSize: 'small' }}>
                                    Appointment
                                </span>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'>
                                <ChatIcon className='text-secondary' fontSize='small' />
                                <span
                                    className='ms-3 fw-bold text-secondary'
                                    style={{ fontSize: 'small' }}>
                                    Messages
                                </span>
                            </div>  

                            <Divider className='mb-4' style={{ height: '2px' }} />

                            <div className='ps-3'>
                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Profile</span>
                                </div>

                                <div className='py-2'>
                                    <div className='d-flex ms-2 my-4 align-items-center'>
                                        <PersonIcon className='text-secondary' fontSize='small' />
                                        <span
                                            className='ms-3 fw-bold text-secondary'
                                            style={{ fontSize: 'small' }}>
                                            Profile Settings
                                        </span>
                                    </div>

                                    <div className='d-flex ms-2 my-4 align-items-center'>
                                        <NotificationsActiveIcon
                                            className='text-secondary'
                                            fontSize='small'
                                        />
                                        <span
                                            className='ms-3 fw-bold text-secondary'
                                            style={{ fontSize: 'small' }}>
                                            Notification
                                        </span>
                                    </div>

                                    <div className='d-flex ms-2 my-4 align-items-center'>
                                        <SettingsIcon className='text-secondary' fontSize='small' />
                                        <span
                                            className='ms-3 fw-bold text-secondary'
                                            style={{ fontSize: 'small' }}>
                                            Help & Settings
                                        </span>
                                    </div>

                                    <div className='d-flex ms-2 my-4 align-items-center'>
                                        <InfoIcon className='text-secondary' fontSize='small' />
                                        <span
                                            className='ms-3 fw-bold text-secondary'
                                            style={{ fontSize: 'small' }}>
                                            About DocSwift
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

					<div className='flex-fill w-50 py-3'>
						<div className='mb-4'>
							<span className='fw-bold text-secondary'>Welcome, </span>
							<span className='fw-bold font-purple'> {docName}</span>
						</div>

						<div className='d-flex'>
							<div className='w- me-5'>
								<div className='d-flex'>
									<AccessibleOutlinedIcon
										className='font-purple'
										fontSize='large'
									/>
									<div className='ms-3 font-grey'>
										<p className='mb-0 fw-bold' style={{ fontSize: 'small' }}>
											3000
										</p>
										<p style={{ fontSize: 'x-small' }}>Patients Treated</p>
									</div>
								</div>
							</div>

							<div className='w-25'>
								<div className='d-flex'>
									{/* <AccessibleOutlinedIcon className='font-purple' fontSize='large'/> */}
									<VerifiedIcon className='font-purple' fontSize='large' />

									<div className='ms-3 font-grey'>
										<p className='mb-0 fw-bold' style={{ fontSize: 'small' }}>
											Ratings
										</p>
										{/* <p style={{ fontSize: 'x-small' }}>Patients Treated</p> */}
										<Rating
											name='read-only'
											value={rating}
											size='small'
											readOnly
										/>
									</div>
								</div>
							</div>
						</div>

						<p className='my-4 fw-bold'>Scheduled Appointments</p>

						<div className=''>
							<div className='row align-items-center w-100'>
								<div className='col-3'>
									<span
										className='ms-4 text-secondary'
										style={{ fontSize: 'small' }}>
										Time Slot
									</span>
								</div>
								<div className='px-2 col-5'>
									<span
										className='ms-2 text-secondary'
										style={{ fontSize: 'small' }}>
										Patient Name
									</span>
								</div>
								<div className='col-2 d-flex'>
									<span
										className='ms-2 text-secondary'
										style={{ fontSize: 'small' }}>
										Status
									</span>
								</div>
							</div>
						</div>

						<div>{patientCardElement}</div>
						
						{patientDocumentDetails.length!=0 && (
							<div>
								<div>
									<h2>Document Details</h2>
									<p>File Name: {patientDocumentDetails[0].display}</p>
									<p>
										Download:{' '}
										<a href={patientDocumentDetails[0].downloadURL}>Download Link</a>
									</p>
								</div>
								<button onClick={handleViewClick}>View File</button>
								<button onClick={handleClearClick}>Clear File</button>
							</div>
						)}
						{viewFile==true && (
							<div>
								<embed
									src={patientDocumentDetails[0].downloadURL}
									width='100%'
									height='800px'
								/>
							// </div>
						)}
					</div>

                    <div className='flex-fill d-flex justify-content-end mx-0 px-0'>
                        <div className='border border-top-0 border-3'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar readOnly className='mx-0 px-0 border-bottom border-3' />
                            </LocalizationProvider>
                        </div>
                    </div>

                    <Modal open={openModal} onClose={() => setOpenModal(false)}>
                        <ModalDialog>
                            <DialogTitle>Enter Patient ID</DialogTitle>
                            <DialogContent>Fill in the information of the patient.</DialogContent>
                            <form
                                onSubmit={handleVerifyPid}
                            >
                                <Stack spacing={2}>
                                    <FormControl>
                                        <FormLabel>PID</FormLabel>
                                        <Input onChange={(e)=>{setEnteredPid(e.target.value)}} autoFocus/>
                                    </FormControl>
                                    <Button variant='contained' type="submit">Submit</Button>
                                </Stack>
                            </form>
                        </ModalDialog>
                    </Modal>
                    <Snackbar
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        message="Patient Verified"
                        action={action}
                    />
                </div>
            </div>
        </>
    );
}


export default DoctorAppointment;
