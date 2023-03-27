import React, { useState } from "react";
import "./Signup.css";
import signUpIcon from "../../assets/iconhome.png";
import appIcon from "../../assets/appicon.png";
import {
	Button,
	TextField,
	InputAdornment,
	IconButton,
	Typography,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Form = styled("form")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "1.8em",
	marginTop: "3em",
});

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Submit the form
		console.log("Form submitted:", formData);
	};

	return (
		<div className="signup-container">
			<div className="signup-container-left">
				<p>
					Join the fitness community and achieve your goals with Gym Buddy. Sign
					up now and take the first step towards a healthier you!
				</p>
				<img className="signup-image" src={signUpIcon} alt="icon" />
				<img className="app-icon" src={appIcon} alt="logo" />
			</div>
			<div className="signup-container-right">
				<p className="signup-title">Login</p>

				<p className="signup-desc">Lets get started with fitness journey</p>
				<Form onSubmit={handleSubmit}>
					<TextField
						label="Email"
						type="email"
						name="email"
						required
						value={formData.email}
						onChange={handleChange}
						sx={{ width: "70%" }}
					/>
					<TextField
						label="Password"
						type="password"
						name="password"
						required
						value={formData.password}
						onChange={handleChange}
						sx={{ width: "70%" }}
					/>
					{/* {passwordError && (
							<Typography variant="caption" color="error">
								{passwordError}
							</Typography>
						)} */}
					<Button
						variant="contained"
						type="submit"
						// color="#1336B0"
						sx={{ width: "70%", bgcolor: "#1336B0" }}
					>
						Login
					</Button>
					<Button variant="contained" type="submit" sx={{ width: "70%" }}>
						Signin with google
					</Button>
					<div className="signup-footer">
						<p style={{ marginRight: "200px", cursor: "pointer" }}>
							Not a member?
						</p>
						<p style={{ textDecoration: "underline", cursor: "pointer" }}>
							Sign up to your account
						</p>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Login;
