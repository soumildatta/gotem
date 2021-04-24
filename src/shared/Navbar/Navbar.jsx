import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Logo from "../logo_v1.png";
import { useAuth } from "../../contexts/AuthContext";
import NavLink from "./NavLink.jsx";
import firebase from "firebase";
import { db } from "../../firebase";
import useFetchRequests from "../../hooks/useFetchRequests";
import useIsDriver from "../../hooks/useIsDriver";

const Navbar = () => (
  <div className="relative bg-primaryBlue">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
        <NavLogo />
        <Links />
      </div>
    </div>
  </div>
);

//navbar always has logo on the left side which links to homepage
const NavLogo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/" className="flex justify-center items-center">
      <span className="sr-only">Workflow</span>
      <img src={Logo} alt="" className="h-12" />
      <h1 className="text-white font-normal text-2xl ml-4">GOTEM</h1>
    </Link>
  </div>
);

const LogOutButton = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    try {
      await logout();
      localStorage.setItem("reset", "true");
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
      <Link to="" onClick={handleLogout}>
        Log Out
      </Link>
    </div>
  );
};

//for passenger users who have a current request, the RequestRide link
//on the navbar will not be visible
const Persona = () => {
  const { isDriver } = useIsDriver();
  const { currentRequest } = useFetchRequests(isDriver);
  return (
    <div className="md:flex items-center justify-end md:flex-1 lg:w-0 text-white">
      {!currentRequest && (
        <>
          <NavLink linkName="Request Ride" linkDestination="/request" />
          <NavLink linkName="Dashboard" linkDestination="/dashboard" />
        </>
      )}

      <LogOutButton />
    </div>
  );
};

//the links/buttons shown on the right side of the navbar
const Links = () => {
  const { isLoggedIn } = useAuth("false");
  const [persona, setPersona] = useState("passenger");
  const currentUser = firebase.auth().currentUser;

  //if no one is logged in, show sign up and login buttons
  if (isLoggedIn === false) {
    return (
      <div className="md:flex items-center justify-end md:flex-1 lg:w-0 text-white">
        <NavLink linkName="Sign In" linkDestination="/signin" />
        <a
          href="/signup"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-400 hover:bg-green-500"
        >
          Sign up
        </a>
      </div>
    );
  } else {
    //get logged in user's persona
    if (currentUser != null) {
      db.collection("Users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (currentUser.email === doc.id) {
              setPersona(doc.data().persona);
            }
          });
        });
    }

    //show different links based on persona
    if (persona === "passenger") {
      return <Persona />;
    } else {
      return (
        <div className="md:flex items-center justify-end md:flex-1 lg:w-0 text-white">
          <NavLink linkName="Ride Requests" linkDestination="/requests" />
          <NavLink linkName="Payments" linkDestination="/payments" />
          <LogOutButton />
        </div>
      );
    }
  }
};

export default Navbar;
