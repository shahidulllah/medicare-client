import { createContext, useEffect, useState } from "react";
// import { useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Auth from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // createNew User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // Update User
  const updateUser = (name, image) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // GoogleLoginUser
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  // LogoutUser
  const logOut = () => {
    setLoading(true);
    return signOut(Auth);
  };

  // Observer Function
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // get the token and store client side
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // do something
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    loading,
    googleLogin,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
