import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Requests from "./pages/requests/Requests";
import Home from "./pages/home/Home";
import Navbar from "./shared/Navbar/Navbar";
import DriverPayments from "./pages/driverPayments/DriverPayments";

import ForgotPassword from "./pages/forgotPassword/ForgotPassword";

import UserDashboard from "./pages/userDashboard/UserDashboard";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden overflow-y-hidden">
        <Navbar />
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/requests" component={Requests} />
      <Route path="/payments" component={DriverPayments} />
      <Route path="/user-dashboard" component={UserDashboard} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </Router>
  );
}

export default App;
