import React from "react";
import "./App.css";
import LogIn from "./components/LogIn"
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function App() {
	return (
		<div className="App">
			<LogIn />
		</div>
	);
}

export default App;
