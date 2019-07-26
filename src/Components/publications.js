import React, { Component } from "react";

class Publications extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="publica">Mis Publicaciones</p>
        <div className="card text-white  mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header color">Ingeniero QA infraestructura</div>
          <div className="card-body white">
            <h5 className="card-title">Publicado el 26-07-2019</h5>
            <p className="card-text ">
              Especialista en Infraestructura con conocimientos técnicos que le
              permitan definir la estrategia, modelo operativo y herramientas
              para entregar un diagnóstico (causa...
            </p>
          </div>
        </div>
        <div className="card text-white  mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header color">Ingeniero QA infraestructura</div>
          <div className="card-body white">
            <h5 className="card-title">Publicado el 26-07-2019</h5>
            <p className="card-text ">
              Especialista en Infraestructura con conocimientos técnicos que le
              permitan definir la estrategia, modelo operativo y herramientas
              para entregar un diagnóstico (causa...
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Publications;
