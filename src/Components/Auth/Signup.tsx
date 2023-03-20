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

function Signup() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [passwordError, setPasswordError] = useState("");

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		validatePassword(formData.password);
		if (passwordError.length === 0) {
			// Submit the form
			console.log("Form submitted:", formData);
		}
	};

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validatePassword = (password: string) => {
		const passwordRegex =
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/;

		if (!passwordRegex.test(password)) {
			setPasswordError(
				"Password must be 8 characters long and contain at least one uppercase letter, and one number."
			);
		} else {
			setPasswordError("");
		}
	};

	const handlePasswordChange = (e: any) => {
		const password = e.target.value;
		setFormData({ ...formData, password });
		// validatePassword(password);
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
				<p className="signup-title">Create an account</p>
				<p className="signup-desc">Lets get started with fitness journey</p>
				<Form onSubmit={handleSubmit}>
					<TextField
						label="Name"
						name="name"
						required
						value={formData.name}
						onChange={handleChange}
						sx={{ width: "70%" }}
					/>
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
						type={showPassword ? "text" : "password"}
						name="password"
						required
						value={formData.password}
						onChange={handlePasswordChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleClickShowPassword}>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
						sx={{ width: "70%" }}
					/>
					{passwordError && (
						<Typography variant="caption" color="error">
							{passwordError}
						</Typography>
					)}
					<TextField
						label="Confirm Password"
						type="password"
						name="confirmPassword"
						required
						value={formData.confirmPassword}
						onChange={handleChange}
						sx={{ width: "70%" }}
					/>
					<Button
						variant="contained"
						type="submit"
						// color="#1336B0"
						sx={{ width: "70%", bgcolor: "#1336B0" }}
					>
						Create An Account
					</Button>
					<Button variant="contained" type="submit" sx={{ width: "70%" }}>
						Signup with google
					</Button>
					<div className="signup-footer">
						<p style={{ marginRight: "200px", cursor: "pointer" }}>
							Alread a member?
						</p>
						<p style={{ textDecoration: "underline", cursor: "pointer" }}>
							Sign in to your account
						</p>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Signup;
