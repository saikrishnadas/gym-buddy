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

function Signup() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [details, setDetails] = useState({
		gender: "male",
		dob: "",
		height: "",
		weight: "",
	});

	const [location, setLocation] = useState({
		location: "male",
		fitnessLevel: "",
		fitnessGoal: "",
		personalPerference: "",
		excludedFoods: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const [currentStep, setCurrentStep] = useState(0);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		validatePassword(formData.password);
		if (passwordError.length === 0) {
			// Submit the form
			console.log("Form submitted:", formData);
			setCurrentStep(1);
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

	const handleDetailsSubmit = (e: any) => {
		console.log("details submitted:", details);
		setCurrentStep(2);
	};

	const handleDetailsChange = (event: any) => {
		setDetails({ ...details, [event.target.name]: event.target.value });
	};

	const handleLocationSubmit = (e: any) => {
		console.log("location submitted:", location);
		setCurrentStep(2);
	};

	const handleLocationChange = (event: any) => {
		setLocation({ ...location, [event.target.name]: event.target.value });
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
				{currentStep === 0 ? (
					<p className="signup-title">Create an account</p>
				) : (
					<p className="signup-title">Tel us more aboout you</p>
				)}

				<p className="signup-desc">Lets get started with fitness journey</p>
				{currentStep === 0 && (
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
				)}
				{currentStep === 1 && (
					<Form onSubmit={handleDetailsSubmit}>
						<InputLabel id="gender-label">Gender</InputLabel>
						<Select
							labelId="gender-label"
							id="gender-select"
							required
							value={details.gender}
							onChange={handleDetailsChange}
						>
							<MenuItem value="male">Male</MenuItem>
							<MenuItem value="female">Female</MenuItem>
							<MenuItem value="not disclosed">Prefer not to disclose</MenuItem>
						</Select>
						<TextField
							label="Date of birth"
							name="dob"
							required
							value={details.dob}
							onChange={handleChange}
							sx={{ width: "70%" }}
						/>
						<TextField
							label="Height"
							name="height"
							required
							value={details.height}
							onChange={handleChange}
							sx={{ width: "70%" }}
						/>
						<TextField
							label="Weight"
							name="weight"
							required
							value={details.weight}
							onChange={handleChange}
							sx={{ width: "70%" }}
						/>
						<Button
							variant="contained"
							type="submit"
							// color="#1336B0"
							sx={{ width: "70%", bgcolor: "#1336B0", marginBottom: "20px" }}
						>
							Next
						</Button>
					</Form>
				)}
				{currentStep === 2 && (
					<Form onSubmit={handleLocationSubmit}>
						<TextField
							label="Location"
							name="location"
							required
							value={location.location}
							onChange={handleLocationChange}
							sx={{ width: "70%" }}
						/>
						<TextField
							label="Fitness Level"
							name="fitnessLevel"
							required
							value={location.fitnessLevel}
							onChange={handleLocationChange}
							sx={{ width: "70%" }}
						/>
						<TextField
							label="Fitness Goal"
							name="fitnessGoal"
							required
							value={location.fitnessGoal}
							onChange={handleLocationChange}
							sx={{ width: "70%" }}
						/>
						<TextField
							label="Personal Perference"
							name="personalPerference"
							required
							value={location.personalPerference}
							onChange={handleLocationChange}
							sx={{ width: "70%" }}
						/>
						<TextField
							label="Exclude (Foods)"
							name="exculdedFoods"
							required
							value={location.excludedFoods}
							onChange={handleLocationChange}
							sx={{ width: "70%" }}
						/>
						<Button
							variant="contained"
							type="submit"
							// color="#1336B0"
							sx={{ width: "70%", bgcolor: "#1336B0", marginBottom: "20px" }}
						>
							Submit
						</Button>
					</Form>
				)}
				<div className="dots-container">
					{currentStep === 0 ? (
						<div className="dot-current"></div>
					) : (
						<div className="dots"></div>
					)}
					{currentStep === 1 ? (
						<div className="dot-current"></div>
					) : (
						<div className="dots"></div>
					)}

					{currentStep === 2 ? (
						<div className="dot-current"></div>
					) : (
						<div className="dots"></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Signup;
