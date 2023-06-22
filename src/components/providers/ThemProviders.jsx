import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';

 export const ThemContext = createContext(null);

 const auth = getAuth(app)
 
 const googleAuthProvider = new GoogleAuthProvider()
 
  const ThemProviders = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
   }

   const signInGooglePopup = () => {
     return  signInWithPopup(auth, googleAuthProvider)
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

    const logout = () => {
       return signOut(auth);
    }

   // observe auth state change
    useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return() => {
            unsubscribe();
        }
    },[])

     const authInfo = {
        user, 
        loading,
        createUser,
        signInGooglePopup,
        signIn,
        logout

     }

    return (
        <ThemContext.Provider value={authInfo}>
            {children}
        </ThemContext.Provider>
    );
};

export default ThemProviders;