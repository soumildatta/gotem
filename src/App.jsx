import "./App.css";
import Navbar from "./shared/Navbar/Navbar";
import Signup from "./login/signup";
import Signin from "./login/signin"
import DriverPayments from "./driverPayments/DriverPayments";
import Requests from "./requests/Requests";
import UserDashboard from "./userDashboard/UserDashboard";
function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Signup/>
      <Signin/>

      <div className="overflow-x-hidden overflow-y-hidden">
        {/* <DriverPayments />
        <Requests /> */}
        <UserDashboard />
      </div>
    </div>
  );
}

export default App;
