import "./App.css";
import Navbar from "./shared/Navbar/Navbar";
import DriverPayments from "./driverPayments/DriverPayments";

function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <div className="overflow-x-hidden overflow-y-hidden">
        <DriverPayments />
      </div>
    </div>
  );
}

export default App;
