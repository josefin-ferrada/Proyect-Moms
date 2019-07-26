import React, { Component } from "react";
import "../css/publish.css";
import Filters from "./filters";
import { config } from "./../firebase/config";

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreFilters: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(name) {
    if (name == "filter") {
      this.setState({
        showMoreFilters: true
      });
      setTimeout(() => {
        var elmnt = document.getElementById("selectNivelIngles");
        elmnt.scrollIntoView();
      }, 200);
    }
  }
  showComponent() {
    if (this.state.showMoreFilters) {
      return <Filters />;
    } else {
      return null;
    }
  }

  sendMail() {
    let user = config.auth().currentUser;
    let to = user.email;
    let subject = "Reclutamiento Proyecto-Moms";
    let message = encodeURIComponent(
      '<img src="https://i.ibb.co/SmqhHSQ/Group-2-9.png">'
    );

    let url = "http://advisergroup.cl/email_sender.php";
    url += "?to=" + to + "&subject=" + subject + "&message=" + message;
    fetch(url);
    alert("tu publicacion se ha realizado exitosamente");
    setTimeout(() => {
      let url2 = "http://advisergroup.cl/email_sender.php";
      let secondMessage = encodeURIComponent(
        '<img src="https://i.ibb.co/vXkKGGn/Group-3-2.png">'
      );
      url2 += "?to=" + to + "&subject=" + subject + "&message=" + secondMessage;
      fetch(url2);
    }, 60000);
  }

  render() {
    return (
      <React.Fragment>
        <form id="publishAnOfer">
          <p className="publica">Publica un empleo</p>

          <div class="form-group">
            <label htmlFor="inputAddress">Título empleo</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Ejemplo: Front-End developer avanzada"
            />
            <label htmlFor="inputState">Categoría de empleo</label>
            <select id="inputState" class="form-control">
              <option selected>Escoger</option>
              <option>Abastecimiento y logistica</option>
              <option>Administracion, contabilidad y finanzas</option>
              <option>Comercial, ventas y negocios</option>
              <option>Educacion Docencia y Capacitacion</option>
              <option>Salud Medicina y Farmacia</option>
              <option>Entretenimiento</option>
              <option>Tecnologias de la informacion</option>
            </select>
            <label htmlFor="exampleFormControlTextarea1">
              Descripción del cargo
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Ejemplo: Tareas, beneficios etc.  "
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlFor="inputState">Jornada Laboral</label>
              <select id="inputState" class="form-control">
                <option defaultValue>Escoger</option>
                <option>Proyecto</option>
                <option>Part-time</option>
                <option>Freelance</option>
                <option>Full-time con flexibilidad</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="inputState">Educación</label>
              <select id="inputState" class="form-control">
                <option selected>Escoger</option>
                <option>Tecnico</option>
                <option>Universitario (Pre-Grado)</option>
                <option>Magister- Maestria (Post-Grado)</option>
                <option>Doctorado</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlFor="inputState">Rango renta</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Mínimo"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Máximo"
                style={{ marginTop: "40px" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label htmlFor="inputState">
              ¿Tu empresa tiene más necesidades?
            </label>
            <button
              type="button"
              class="btn btn-light"
              onClick={() => this.onButtonClick("filter")}
            >
              Añadir más filtros ▾
            </button>
          </div>
          <div
            id="extraFilters"
            style={
              this.state.showMoreFilters
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <div class="form-row">
              <div class="form-group col-md-6">
                <label htmlFor="selectNivelIngles">Nivel de ingles</label>
                <select id="selectNivelIngles" class="form-control">
                  <option>Basico</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label htmlFor="selectExperiencia">Años de experiencia</label>
                <select id="selectExperiencia" class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5 o mas</option>
                </select>
              </div>
            </div>
          </div>

          <button type="button" class="btn btn-primary" onClick={this.sendMail}>
            Terminar publicación
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Publish;
