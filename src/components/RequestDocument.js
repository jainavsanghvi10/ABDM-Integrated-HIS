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
import TokenIcon from '@mui/icons-material/Token';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ListIcon from '@mui/icons-material/List';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TodayIcon from '@mui/icons-material/Today';

import aadhaarImg from '../assets/images/online_transaction.svg'
import aadhaarImg2 from '../assets/images/hire.svg'

import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useEffect, useState } from "react";






const RequestDocument = () => {

    function syntaxHighlight(json) {
        if (!json) return ""; //no JSON from response

        json = json
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return json.replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function (match) {
                var cls = "number";
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = "key";
                    } else {
                        cls = "string";
                    }
                } else if (/true|false/.test(match)) {
                    cls = "boolean";
                } else if (/null/.test(match)) {
                    cls = "null";
                }
                return '<span class="' + cls + '">' + match + "</span>";
            }
        );
    }

    // const [ourJSON, setOurJSON] = useState();

    const ourJSON = {
        "resourceType": "Bundle",
        "id": "Medicalrecord-bundle-01",
        "identifier": {
            "system": "http://hip.in",
            "value": "305fecc2-4ba2-46cc-9ccd-efa755aff51d"
        },
        "type": "document",
        "timestamp": "2024-05-01T18:30:00.000+05:30",
        "entry": [{
            "fullUrl": "Composition/Composition-01",
            "resource": {
                "resourceType": "Composition",
                "id": "Composition-01",
                "meta": {
                    "versionId": "1",
                    "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/HealthDocumentRecord"]
                },
                "status": "final",
                "type": {
                    "coding": [{
                        "system": "http://snomed.info/sct",
                        "code": "419891008",
                        "display": "Record artifact"
                    }]
                },
                "subject": {
                    "reference": "Patient/Patient-01"
                },
                "date": "2024-05-03T05:14:10+05:30",
                "author": [{
                    "reference": "Practitioner/Practitioner-01"
                }],
                "title": "Record Artifact",
                "section": [{
                    "code": {
                        "coding": [{
                            "system": "http://snomed.info/sct",
                            "code": "419891008",
                            "display": "Record artifact"
                        }]
                    },
                    "entry": [{
                        "reference": "HealthDocument/HealthDocument-01"
                    }]
                }]
            }
        }, {
            "fullUrl": "Patient/Patient-01",
            "resource": {
                "resourceType": "Patient",
                "id": "Patient-01",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2024-05-01T18:30:00.000+05:30",
                    "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Arya, 21 year, Male</div>"
                },
                "identifier": [{
                    "type": {
                        "coding": [{
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical record number"
                        }]
                    },
                    "system": "https://ndhm.in/SwasthiID",
                    "value": "1234"
                }],
                "name": [{
                    "text": "Arya"
                }],
                "telecom": [{
                    "system": "phone",
                    "value": "+916300841030",
                    "use": "mobile"
                }],
                "gender": "male",
                "birthDate": "2003-04-23"
            }
        }, {
            "fullUrl": "Practitioner/Practitioner-01",
            "resource": {
                "resourceType": "Practitioner",
                "id": "Practitioner-01",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2024-05-01T18:30:00.000+05:30",
                    "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/Practitioner"]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr., Milind, MD (Medicine) </div>"
                },
                "identifier": [{
                    "type": {
                        "coding": [{
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MD",
                            "display": "Medical License number"
                        }]
                    },
                    "system": "https://ndhm.in/DigiDoc",
                    "value": "7601003178999"
                }],
                "name": [{
                    "text": "Dr. Milind"
                }]
            }
        }, {
            "fullUrl": "HealthDocument/HealthDocument-01",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "HealthDocument-01",
                "meta": {
                    "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/DocumentReference"]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Document Reference</div>"
                },
                "status": "current",
                "docStatus": "final",
                "type": {
                    "text": "Wellness Record"
                },
                "subject": {
                    "reference": "Patient-01",
                    "display": "Patient"
                },
                "content": [{
                    "attachment": {
                        "contentType": "application/pdf",
                        "language": "en-IN",
                        "data": "JVBERi0x",
                        "title": "Report",
                        "creation": "2024-05-03T05:14:10+05:30"
                    }
                }]
            }
        }]
    }

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((response) => response.json())
    //         .then((json) => setOurJSON(json));
    // }, []);


    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/user-login');
    }
    return (
        <>
            <div className="px-3 py-3 d-flex align-items-center justify-content-between border-bottom border-3">
                <div className='d-flex align-items-center'>
                    <img height='30px' src={docicon} />
                    <h5 className="fw-bold mb-0 ms-2">DocSwift</h5>
                </div>
                <Button className='d-flex ms-2 align-items-center' style={{ borderColor: '#4200FF' }} variant="outlined">
                    <LogoutIcon className='font-purple' fontSize='small' />
                    <span className='ms-3 fw-bold font-purple' onClick={handleLogout} style={{ fontSize: 'small' }}>Logout</span>
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
                            <div className='d-flex ms-2 my-4 align-items-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => { navigate('/abha-generator') }}
                            >
                                <DashboardRoundedIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    ABHA Number
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => { navigate('/care-context') }}
                            >
                                <TokenIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' fontWeight="bold" style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Care Context Token
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => { navigate('/patient/register') }}
                            >
                                <HowToRegIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Register Patient
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => { navigate('/doctors-list') }}
                            >
                                <ListIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Doctor List
                                </Typography>
                            </div>

                            <div className='d-flex ms-2 my-4 align-items-center'
                                style={{ cursor: 'pointer' }}
                                onClick={() => { navigate('/pick-slot') }}
                            >
                                <TodayIcon className='text-secondary' fontSize='small' />
                                <Typography variant="body2" component="span" className='ms-3' style={{ fontSize: 'small', color: 'text.secondary' }}>
                                    Appointment Booking
                                </Typography>
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

                <div className='bg-signup pt-4'>
                    <div className='d-flex w-100 mx-auto border  rounded rounded-4' style={{background:'rgb(254,254,254'}}>
                        <div className='w-25 d-flex flex-column align-items-center justify-content-center rounded-start-4 border-end border-3'>
                            <img className='w-75 my-4' src={aadhaarImg} />
                            <FormControl>
                                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='w-75' style={{ overflow: 'scroll', maxHeight: '80vh' }}>
                            {/* <h3 className="header">
                                Show JSON As Pretty Print With Syntax Highlighting
                            </h3> */}
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: syntaxHighlight(JSON.stringify(ourJSON, undefined, 4))
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default RequestDocument;