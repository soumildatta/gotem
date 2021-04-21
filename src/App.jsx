import React from "react";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Navbar from "./shared/Navbar/Navbar";
import Requests from "./pages/requests/Requests";
import DriverRoute from "./shared/DriverRoute";
import PassengerRoute from "./shared/PassengerRoute";
import RequestRide from "./pages/requestRide/RequestRide";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import DriverPayments from "./pages/driverPayments/DriverPayments";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/forgotPassword/ResetPassword";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App overflow-x-hidden overflow-y-hidden">
          <Navbar />
        </div>

        <Route exact path="/" component={Home} />

        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/forgot-password/reset" component={ResetPassword} />

        <Route path="/forgot-password" component={ForgotPassword} />

        <DriverRoute path="/requests" component={Requests} />
        <DriverRoute path="/payments" component={DriverPayments} />

        <PassengerRoute path="/request" component={RequestRide} />
        <PassengerRoute path="/dashboard" component={UserDashboard} />
      </Router>
    </AuthProvider>
  );
}

export default App;
