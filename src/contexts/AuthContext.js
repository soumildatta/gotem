import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase";
import { auth } from "../firebase";

const AuthContext = React.createContext();
const db = firebase.firestore();

// function that returns the context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(currentUser));

  // signup function
  function signup(email, name, password, personav) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        if (auth.currentUser) {
          cred.user.updateProfile({
            displayName: name,
          });
        }
        // stores the user persona in the Users document
        return db.collection("Users").doc(cred.user.email).set({
          persona: personav,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // function for signing in
  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // function for logging out
  function logout() {
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // set state if user is logged in
  useEffect(() => {
    setIsLoggedIn(Boolean(currentUser));
  }, [currentUser]);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
