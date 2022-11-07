import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const login = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () =>{
    setLoading(true)
    localStorage.removeItem('token')
    return signOut(auth);
  }

   useEffect( () =>{
   const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        // console.log(currentUser)
        setUser(currentUser);
        setLoading(false);
    })

    return ()=>{
       return unsubscribe();
    }
   },[])

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;