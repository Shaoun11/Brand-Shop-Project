import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Authentication/Authentication';



 export const Authcontext=createContext(null);
const googleprovider=new GoogleAuthProvider();
const githubprovider=new GithubAuthProvider();



const AuthProvider = ({children}) => {
  const [user,setuser]=useState(null);
  const [loader,setloader]=useState(true)
  const createuser=(email,password)=>{
    
    return createUserWithEmailAndPassword(auth,email,password)
    }

    
    const handleUpdateProfile = (name, photo) => {
      setloader(true);
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      })
  }
    const userlogin=(email,password)=>{
      setloader(true);
    return signInWithEmailAndPassword(auth,email,password)
    }

    const googlelogin=()=>{
      setloader(true);
     return signInWithPopup(auth,googleprovider)
    }
    const githublogin=()=>{
      setloader(true);
     return signInWithPopup(auth,githubprovider)
    }

   const logout=()=>{
    setloader(true);
    return signOut(auth)
   }

  useEffect(()=>{
    setloader(false);
    onAuthStateChanged(auth, (user) => {
      setuser(user)
     
    });

  },[]);
  
  const Authinfo={
    createuser,
    userlogin,
    user,
    googlelogin,
    logout,githublogin,handleUpdateProfile,loader
   }
  console.log(user);
    return (
        <Authcontext.Provider value={Authinfo}>
         {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;