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
      </Routes>
    </Router>
  );
}

export default App;
