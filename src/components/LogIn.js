import React from "react";
import GoogleBtn from "./GoogleBtn";

function LogIn() {
	return (
		<div className="row mx-2 p-2 my-auto">
			<h2 className="px-3 pb-3">Iniciar Sesión:</h2>
			<form className="container col-12 p-3">
				<div className="form-group">
					<label for="email">Dirección de correo:</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						placeholder="ejemplo@ejemplo.com"
						required
					/>
				</div>
				<div className="form-group">
					<label for="password">Contraseña:</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						required
					/>
				</div>
				<div className="form-group form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="terminosCheck"
						name="terminosCheck"
						required
					/>
					<label className="form-check-label" for="terminosCheck">
						Recuérdame
					</label>
				</div>
				<div className="row justify-content-center">
					<button
						type="submit"
						className="btn btn-primary w-50"
						id="btnRegistro"
					>
						Iniciar Sesión
					</button>
				</div>
				<hr />
				<GoogleBtn />
			</form>
		</div>
	);
}

export default LogIn;
