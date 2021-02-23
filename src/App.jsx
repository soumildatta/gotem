import "./App.css";
import Navbar from "./shared/Navbar/Navbar";
import Signup from "./login/signup";
import Signin from "./login/signin";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <Signin/>
    </div>
  );
}

export default App;
