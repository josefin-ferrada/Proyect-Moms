import React, { Component } from "react";
import Nav from "./navbar";
import { Link } from "react-router-dom";
import config from "./../firebase/config";
import "../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  login(e) {
    e.preventDefault();
    config
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <div
          style={{
            padding: " 5px",
            backgroundColor: "#EFEFEF",
            margin: "auto"
          }}
        >
          <div
            className="card"
            Style="padding:15px; margin-top: 80px; margin-bottom:200px; padding-bottom:20px;"
          >
            <article className="card-body none">
              <p className="publica">Iniciar Sesión</p>

              <form>
                <p className="text-success text-center" id="align">
                  Ingresa a tu cuenta
                </p>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {" "}
                        <i className="fa fa-user" />{" "}
                      </span>
                    </div>
                    <input
                      value={this.state.email}
                      name="email"
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Ingresa E-mail"
                      type="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {" "}
                        <i className="fa fa-lock" />{" "}
                      </span>
                    </div>
                    <input
                      onChange={this.handleChange}
                      name="password"
                      className="form-control"
                      placeholder="Contraseña"
                      type="password"
                    />
                  </div>
                </div>
              </form>
              <div className="options" Style="padding:auto;">
                <div id="separate">
                  <span className="text-right"> ¿Olvidaste tu contraseña?</span>
                  <Link to="/dashboard">
                    <button
                      type="submit"
                      onClick={this.login}
                      className="btn btn-primary btn-block"
                      id="log"
                    >
                      INICIAR SESIÓN
                    </button>
                  </Link>
                </div>
                <span className="text-right">¿Eres usuario nuevo?</span>
                <Link to="/register">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    id="unete"
                  >
                    REGISTRATE
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
