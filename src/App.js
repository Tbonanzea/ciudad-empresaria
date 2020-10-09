import React from "react";
import "./App.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function App() {
	return (
		<div className="App container p-2 my-auto">
			<h2 className="px-3 pb-3">
				Vamos a necesitar los siguientes datos para poder realizar el
				registro:
			</h2>
			<form className="container p-3">
				<div className="form-row">
					<div className="form-group col">
						<label for="name">Nombre:</label>
						<input
							id="name"
							name="name"
							type="text"
							className="form-control"
							required
						/>
					</div>
					<div className="form-group col">
						<label for="surname">Apellido:</label>
						<input
							id="surname"
							name="surname"
							type="text"
							className="form-control"
							required
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-6">
						<label for="dni">DNI:</label>
						<input
							id="dni"
							name="dni"
							type="text"
							className="form-control"
							required
						/>
					</div>
					<div className="form-group col-6">
						<p className="mb-2 p-0">
							<b>Sexo:</b>
						</p>
						<div className="form-group d-flex justify-content-around m-0 py-2">
							<div>
								<input
									type="radio"
									id="sMasculino"
									name="sexoUsuario"
									value="masculino"
								/>
								<label
									for="sMasculino"
									className="form-check-label"
								>
									Mas
								</label>
							</div>
							<div>
								<input
									type="radio"
									id="sFemenino"
									name="sexoUsuario"
									value="femenino"
								/>
								<label
									for="sFemenino"
									className="form-check-label"
								>
									Fem
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label for="empresa">
						Empresa en la que está registrado:
					</label>
					<select
						className="form-control"
						name="empresa"
						id="empresa"
						required
					>
						<option selected>Seleccione una empresa...</option>
						<option value="">Banco Credicoop</option>
						<option value="">Cruz de los Vientos</option>
						<option value="">Gruphogar</option>
						<option value="">Innova SV</option>
						<option value="">Innovar + Emprender</option>
						<option value="">Karikal</option>
						<option value="">Mc Afee</option>
						<option value="">Mercado Libre</option>
						<option value="">Parker</option>
						<option value="">Quorum Hotel</option>
						<option value="">Rentauto</option>
						<option value="">Trane</option>
						<option value="">Zurich</option>
					</select>
				</div>
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
				<div className="form-group">
					<label for="rPassword">Repetir Contraseña:</label>
					<input
						type="password"
						className="form-control"
						id="rPassword"
						name="rPassword"
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
						Acepto los <a href="#">Términos y Condiciones</a> de
						uso.
					</label>
				</div>
				<div className="row justify-content-center">
					<button
						type="submit"
						className="btn btn-primary w-50"
						id="btnRegistro"
					>
						Regístrame
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
