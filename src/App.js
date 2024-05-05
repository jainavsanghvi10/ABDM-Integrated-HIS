import './App.css';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';


import PatientLogin from './components/Patient/PatientLogin'
import PatientRegister from './components/Patient/PatientRegister'
import PatientProfile from './components/Patient/PatientProfile';
import PatientDocuments from './components/Patient/PatientDocuments';
import HprLogin from './components/HealthcareProfessional/HprLogin';
import HprRegister from './components/HealthcareProfessional/HprRegister';
import HipLogin from './components/Hospital/HipLogin';
import HipRegister from './components/Hospital/HipRegister';
import ABHAGenerator from './components/Generator'
import DoctorsList from './components/DoctorsList';
import PatientStatusList from './components/PatientStatusList'
import UserLogin from './components/UserLogin';
import DoctorAppointment from './components/DoctorAppointment';
import PickSlot from './components/PickSlot';
import StaffAdmin from './components/StaffAdmin';
import CreateDocument from './components/CreateDocument';
import HealthRecord from './components/HealthRecord';
import TrashCopy from './components/TrashCopy';
import CareContext from './components/CareContext';
//0502
function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/user-login" replace={true} />} />

        <Route path="/patient/login" element={<PatientLogin />} />
        <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/documents" element={<PatientDocuments />} />

        <Route path="/hpr/login" element={<HprLogin/>} />
        <Route path="/hpr/register" element={<HprRegister/>} />
        <Route path="/hip/login" element={<HipLogin/>} />
        <Route path="/hip/register" element={<HipRegister/>} />

        <Route path="/patients-list" element={<PatientStatusList/>} />

        <Route path="/doctors-list" element={<DoctorsList/>} />
        <Route path='/doctor-appointment' element={<DoctorAppointment/>} />
        <Route path='/pick-slot' element={<PickSlot/>}/>

        <Route path="/user-login" element={<UserLogin/>} /> {/* user login and doctor login is different */}

        <Route path="/abha-generator" element={<ABHAGenerator/>} />
        <Route path='/staff-admin' element={<StaffAdmin/>}/>

        <Route path='/create-document' element={<CreateDocument/>} />
        <Route path='/health-record' element={<HealthRecord/>} />
        <Route path='/test' element={<TrashCopy/>}/>

        <Route path='/care-context' element={<CareContext/>}/>

      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
