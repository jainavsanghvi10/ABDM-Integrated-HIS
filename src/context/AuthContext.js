import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [did, setDid] = useState(-1);
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  // function signup(email, password) {
  //   return auth.createUserWithEmailAndPassword(email, password);
  // }

  // function login(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password);
  // }
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

  async function loginFunc(username, password){
    const listOfDocs = await fetchAllDocs();
    for(let i=0;i<listOfDocs.length;i++){
      let doc = listOfDocs[i]

      if(doc.username == username && doc.password == password){
        setLoginStatus(true);
        setDid(doc.doctorId)
        alert("Login Success");
        return true;
      }
    }
    alert("Invalid Username or Password")
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