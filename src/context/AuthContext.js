import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [did, setDid] = useState(null);
  const [loginStatus, setLoginStatus] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const fetchStaffByToken = async () => {
    const token = localStorage.getItem('token');
    const data = {
      jwtToken: token
    }
    axios.post('http://localhost:8088/getUserByToken', data)
      .then(response => {
          console.log(response.data);
      })
      .catch(error => {
          alert("Invalid Credential")
          console.error('Errors logging in:', error);
      });
	};

  async function loginFunc(username, password){
    const listOfDocs = await fetchAllDocs();
    for(let i=0;i<listOfDocs.length;i++){
      let doc = listOfDocs[i]

      if(doc.username == username && doc.password == password){
        setLoginStatus(true);
        setDid(doc.doctorId)
        return true;
      }
    }
    setLoginStatus(false);
    return false;
}

  // function logout() {
  //   return auth.signOut()
  // }

  const value = {
    loginStatus,
    did,
    loginFunc,
    // signup,
    // logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}