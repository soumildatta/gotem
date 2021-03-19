import "./App.css";
import Signup from "./login/signup";
import Signin from "./login/signin"
import Requests from "./requests/Requests";
import Navbar from "./shared/Navbar/Navbar";
import DriverPayments from "./driverPayments/DriverPayments";

import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (

    <Router>

      <div className="App overflow-x-hidden overflow-y-hidden">
        <Navbar />
      </div>

      {/*<Route exact path="/" component={Home}/>*/}
      <Route path="/signup" component={Signup}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/requests" component={Requests}/>
      <Route path="/payment-history" component={DriverPayments}/>

    </Router>
  );
}

export default App;
