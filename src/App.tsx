import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/Signup";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</Router>
	);
}

export default App;
