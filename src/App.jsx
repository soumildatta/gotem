import "./App.css";
import Navbar from "./shared/Navbar/Navbar";
import RequestRide from "./requestRide/RequestRide";

function App() {
	return (
		<div className="App">
			<Navbar/>
			<RequestRide />
		</div>
	);
}

export default App;
