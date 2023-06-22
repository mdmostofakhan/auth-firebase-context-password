import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';

 export const ThemContext = createContext(null);

 const auth = getAuth(app)

  const ThemProviders = ({children}) => {

   const [user, setUser] = useState(null)

   const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

     const authInfo = {
        user, 
        createUser,
        signIn
     }

    return (
        <ThemContext.Provider value={authInfo}>
            {children}
        </ThemContext.Provider>
    );
};

export default ThemProviders;