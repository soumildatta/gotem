import Home from "./pages/home/Home";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Navbar from "./shared/Navbar/Navbar";
import Requests from "./pages/requests/Requests";
import RequestRide from "./pages/requestRide/RequestRide";
import PrivateRoute from "./shared/PrivateRoute";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import DriverPayments from "./pages/driverPayments/DriverPayments";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Route path="/forgot-password" component={ForgotPassword} />

        <PrivateRoute path="/requests" component={Requests} />
        <PrivateRoute path="/request" component={RequestRide} />
        <PrivateRoute path="/payments" component={DriverPayments} />
        <PrivateRoute path="/dashboard" component={UserDashboard} />
        
        
      </Router>
    </AuthProvider>
  );
}

export default App;
