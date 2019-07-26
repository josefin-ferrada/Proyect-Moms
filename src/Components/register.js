import React, { Component } from "react";
import Nav from "./navbar";
import { db, config } from "../firebase/config.js";
import { Link } from "react-router-dom";
import "../css/register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      nombre: "",
      apellidos: "",
      razonSocial: "",
      sector: "",
      direccion: "",
      rut: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    config
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
    db.collection("Users")
      .add({
        email: this.state.email,
        password: this.state.password,
        nombre: this.state.nombre,
        apellidos: this.state.apellidos,
        razonSocial: this.state.razonSocial,
        sector: this.state.sector,
        direccion: this.state.direccion,
        rut: this.state.rut
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <div style={{ paddingTop: "60px", backgroundColor: "#ECEBEB" }}>
          <div>
            <form id="publishAnOfer">
              <p className="publica">Datos de Usuario</p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChange}
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Contraseña</label>
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4">Nombre</label>
                  <input
                    value={this.state.nombre}
                    name="nombre"
                    onChange={this.handleChange}
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4">Apellidos</label>
                  <input
                    value={this.state.apellidos}
                    onChange={this.handleChange}
                    name="apellidos"
                    type="text"
                    class="form-control"
                    placeholder="Apellidos"
                  />
                </div>
              </div>
              <div className="build">
                <h4 style={{ marginTop: "20px" }}>Datos de la Empresa</h4>
                <div className="form-row">
                  <div className="col-md-6">
                    <label for="inputEmail4">Nombre o Razón Social</label>
                    <input
                      value={this.state.razonSocial}
                      onChange={this.handleChange}
                      name="razonSocial"
                      type="text"
                      class="form-control"
                      placeholder="Nombre Empresa"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4">Sector</label>
                    <input
                      value={this.state.sector}
                      onChange={this.handleChange}
                      name="sector"
                      type="text"
                      class="form-control"
                      placeholder="Sector"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputZip">Dirección</label>
                    <input
                      value={this.state.direccion}
                      onChange={this.handleChange}
                      name="direccion"
                      type="text"
                      class="form-control"
                      id="inputZip"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <label for="inputEmail4">RUT EMPRESA</label>
                    <input
                      value={this.state.rut}
                      onChange={this.handleChange}
                      name="rut"
                      type="text"
                      class="form-control"
                      placeholder="RUT Empresa"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4">Web</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Sitio Web"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      <p>
                        Al aceptar se aceptan los terminos y condiciones de uso.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <Link to="/dashboard">
                <button
                  onClick={this.signup}
                  type="submit"
                  class="btn btn-primary"
                  id="init"
                >
                  REGISTRARSE
                </button>
              </Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
