import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
	"810523799258-i3rl14ss6i1bpqmge4ehsuh0g659sq1p.apps.googleusercontent.com";

class GoogleBtn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogined: false,
			accessToken: "",
		};

		this.login = this.login.bind(this);
		this.handleLoginFailure = this.handleLoginFailure.bind(this);
		this.logout = this.logout.bind(this);
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
	}

	login(response) {
		if (response.accessToken) {
			this.setState((state) => ({
				isLogined: true,
				accessToken: response.accessToken,
			}));
		}
	}

	logout(response) {
		this.setState((state) => ({
			isLogined: false,
			accessToken: "",
		}));
	}

	handleLoginFailure(response) {
		alert("Failed to log in");
	}

	handleLogoutFailure(response) {
		alert("Failed to log out");
	}

	render() {
		return (
			<div>
				{this.state.isLogined ? (
					<GoogleLogout
						className="btn btn-primary w-50"
						clientId={CLIENT_ID}
						buttonText="Cerrar Sesión"
						onLogoutSuccess={this.logout}
						onFailure={this.handleLogoutFailure}
					></GoogleLogout>
				) : (
					<GoogleLogin
						clientId={CLIENT_ID}
						buttonText="Iniciar Sesión con Google"
						onSuccess={this.login}
						onFailure={this.handleLoginFailure}
						cookiePolicy={"single_host_origin"}
						responseType="code,token"
					/>
				)}
				{this.state.accessToken ? (
					<h5>
						Your Access Token: <br />
						<br /> {this.state.accessToken}
					</h5>
				) : null}
			</div>
		);
	}
}

export default GoogleBtn;