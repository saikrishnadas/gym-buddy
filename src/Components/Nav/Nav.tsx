import React from "react";
import "./Nav.css";
import appIcon from "../../assets/appicon.png";

function Nav() {
	return (
		<div className="nav-container">
			<div className="app-icon-container">
				<img className="app-icon" src={appIcon} alt="logo" />
			</div>
			<div className="nav-items-container">
				<div>Dashboard</div>
				<div>Social</div>
				<div>Profile</div>
				<div>Plans</div>
			</div>
		</div>
	);
}

export default Nav;
