import { createContext, useEffect, useState } from "react";
// import { useState } from "react";
import PropTypes from 'prop-types';
import {GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Auth from "../../Firebase/firebase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // createNew User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    // Update User
    const updateUser = (name, image) => {
        return updateProfile(Auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    // GoogleLoginUser
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(Auth, googleProvider);
    }

    // LogoutUser
    const logOut = () => {
        setLoading(true);
        return signOut(Auth);
    }


    // Observer Function
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubcribe();
        }
    }, [])

    const authInfo = {user, createUser, loginUser, logOut, loading, googleLogin, updateUser}
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