import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Auth/Dashboard/Dashboard";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<Dashboard />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
