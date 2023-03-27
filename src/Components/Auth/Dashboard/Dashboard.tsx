import React from "react";
import Nav from "../../Nav/Nav";
import WorkoutTracker from "./WorkoutTracker";
import "./Dashboard.css";

function Dashboard() {
	return (
		<div className="dashboard-container">
			<Nav />
			<WorkoutTracker />
		</div>
	);
}

export default Dashboard;
