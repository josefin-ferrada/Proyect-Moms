import React, { Component } from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import "../css/homeMobile.css";
import "./../css/dashboard.css";
import avatar from "../img/avatar.png";
import config from "../firebase/config";
import Publish from "./publish";
import Publications from "./publications";
import Profile from "./profile";
import Default from "./default";
import { db } from "./../firebase/config";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentPublish: false,
      showComponentPublications: false,
      showComponentProfile: false,
      showComponentDefault: true
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  _onButtonClick(name) {
    if (name == "publish") {
      this.setState({
        showComponentPublish: true,
        showComponentPublications: false,
        showComponentProfile: false,
        showComponentDefault: false
      });
    } else if (name == "publications") {
      this.setState({
        showComponentPublications: true,
        showComponentPublish: false,
        showComponentProfile: false,
        showComponentDefault: false
      });
    } else if (name == "profile") {
      this.setState({
        showComponentProfile: true,
        showComponentPublish: false,
        showComponentPublications: false,
        showComponentDefault: false
      });
    } else if (name == "atrás") {
      this.setState(prevState => ({
        showComponentPublish: !prevState.showComponentPublish,
        showComponentPublications: !prevState.showComponentPublications,
        showComponentProfile: !prevState.showComponentProfile,
        showComponentDefault: !prevState.showComponentDefault
      }));
    } else {
      this.setState({ showComponentDefault: true });
    }
  }

  logout() {
    config.auth().signOut();
  }

  showComponent() {
    if (this.state.showComponentPublish) {
      return <Publish />;
    } else if (this.state.showComponentPublications) {
      return <Publications />;
    } else if (this.state.showComponentProfile) {
      return <Default />;
    } else if (this.state.showComponentDefault) {
      return <Default />;
    }
  }

  render() {
    return (
      <React.Fragment>
        {" "}
        <nav class="navbar navbar-expand-lg navbar-dark">
          <Link to="/home">
            <img src={logo} style={{ width: "100px" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav float-right text-right pr-3">
              <li className="nav-item active">
                <a
                  href="javascript:void(0)"
                  value="publications"
                  onClick={() => this._onButtonClick("publications")}
                >
                  Publicaciones<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a
                  href="javascript:void(0)"
                  name="publish"
                  onClick={() => this._onButtonClick("publish")}
                >
                  Publicar
                </a>
              </li>
              <li className="nav-item active">
                <a
                  href="javascript:void(0)"
                  onClick={() => this._onButtonClick("profile")}
                >
                  Perfil
                </a>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <button
                    type="button"
                    onClick={() => this.logout()}
                    className="btn btn-light m-2 active mr-auto"
                    id="salir"
                    style={{ borderColor: "none" }}
                  >
                    Cerrar Sesión
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="col-main">{this.showComponent()}</div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">
                  Modal
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  This is a dashboard layout for Bootstrap 4. This is an example
                  of the Modal component which you can use to show content. Any
                  content can be placed inside the modal and it can use the
                  Bootstrap grid classes.
                </p>
                <p>
                  <a href="https://www.codeply.com/go/KrUO8QpyXP" target="_ext">
                    Grab the code at Codeply
                  </a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary-outline"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
