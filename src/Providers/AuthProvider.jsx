import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
import { PropTypes } from 'prop-types';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading]= useState(true);

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
        setLoading(false);

        return () =>{
            return unSubscribe(); 
        };
    })
   },[])

    const createUser = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInGoogle,
    logOut

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}