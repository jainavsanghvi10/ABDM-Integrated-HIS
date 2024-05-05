import './App.css';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';


import PatientRegister from './components/Patient/PatientRegister'
import ABHAGenerator from './components/Generator'
import DoctorsList from './components/DoctorsList';
import UserLogin from './components/UserLogin';
import DoctorAppointment from './components/DoctorAppointment';
import PickSlot from './components/PickSlot';
import StaffAdmin from './components/StaffAdmin';
import CreateDocument from './components/CreateDocument';
import HealthRecord from './components/HealthRecord';
import TrashCopy from './components/TrashCopy';
import CareContext from './components/CareContext';
import RequestDocument from './components/RequestDocument';
//0502
function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/user-login" replace={true} />} />

        {/* <Route path="/patients-list" element={<PatientStatusList/>} /> */}
        {/* <Route path='/test' element={<TrashCopy/>}/> */}

        <Route path='/staff-admin' element={<StaffAdmin/>}/>
        <Route path="/user-login" element={<UserLogin/>} />

        <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/abha-generator" element={<ABHAGenerator/>} />
        <Route path='/care-context' element={<CareContext/>}/>
        <Route path="/doctors-list" element={<DoctorsList/>} />
        <Route path='/pick-slot' element={<PickSlot/>}/>

        <Route path='/doctor-appointment' element={<DoctorAppointment/>} />
        <Route path='/health-record' element={<HealthRecord/>} />
        <Route path='/create-document' element={<CreateDocument/>} />
        <Route path='/request-document' element={<RequestDocument/>}/>

      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
