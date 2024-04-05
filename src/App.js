import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
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
import AddStaff from './components/AddStaff';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/patient/login" element={<PatientLogin />} />
        <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/documents" element={<PatientDocuments />} />
        <Route path="/hpr/login" element={<HprLogin/>} />
        <Route path="/hpr/register" element={<HprRegister/>} />
        <Route path="/hip/login" element={<HipLogin/>} />
        <Route path="/hip/register" element={<HipRegister/>} />
        <Route path="/abha-generator" element={<ABHAGenerator/>} />
        <Route path="/doctors-list" element={<DoctorsList/>} />
        <Route path="/patients-list" element={<PatientStatusList/>} />
        <Route path="/user-login" element={<UserLogin/>} />
        <Route path='/add-staff' element={<AddStaff/>} />
      </Routes>
    </Router>
  );
}

export default App;
