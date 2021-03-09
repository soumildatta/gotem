import "./App.css";
import Navbar from "./shared/Navbar/Navbar";
import DriverPayments from "./driverPayments/DriverPayments";
import Requests from "./requests/Requests";
function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <div className="overflow-x-hidden overflow-y-hidden">
        {/* <DriverPayments /> */}
        <Requests />
      </div>
    </div>
  );
}

export default App;
