import React, { Component } from "react";
import group from "./../img/group.png";
import "../css/default.css";
import Publish from "./publish";

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentPublish: false,
      showDefault: true
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick(name) {
    if (name == "publish") {
      this.setState({
        showComponentPublish: true,
        showComponentPublications: false,
        showComponentProfile: false,
        showComponentDefault: false,
        showDefault: false
      });
    } else {
      this.setState({ showComponentDefault: true });
    }
  }

  showComponent() {
    if (this.state.showComponentPublish) {
      return <Publish />;
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.showComponent()}
        <div
          id="default"
          style={{ display: this.state.showDefault ? "block" : "none" }}
        >
          <div id="userIcon">
            <img
              src={group}
              class="mx-auto img-fluid rounded-circle"
              alt="Generic placeholder thumbnail"
            />
          </div>
          <p className="publica">Bienvenido</p>
          <div id="resume">
            <div className="card-body shadow-sm p-3 mb-5 bg-white rounded tam">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="optionitem">
                  <i class="fas fa-users" />3 Nuevos Postulantes
                </li>
                <li class="list-group-item" id="optionitem">
                  <i class="fas fa-check-square" />1 Publicaciones Activas
                </li>
                <li class="list-group-item" id="optionitem">
                  <i class="fas fa-hands-helping" />0 Tus Contrataciones
                </li>
              </ul>
            </div>
          </div>
          <p id="footerdefault">¿Tienes un nuevo puesto disponible?</p>
          <button
            onClick={() => this._onButtonClick("publish")}
            type="button"
            className="btn btn-primary"
            id="publish"
          >
            HAZ UNA PUBLICACIÓN
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Default;
