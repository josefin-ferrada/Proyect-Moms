import React, { Component } from "react";
import "../css/publish.css";
import Filters from "./filters";
import { config } from './../firebase/config'

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showMoreFilters: false,
      };
    this.onButtonClick = this.onButtonClick.bind(this);
}

  onButtonClick(name) {
  
    if(name == "filter"){
      
        this.setState({
            showMoreFilters: true
        })
    }
  }
showComponent(){
  
    if(this.state.showMoreFilters){
       return (<Filters />)
    }else {
        return null
    }
}
sendMail() {
  let user = config.auth().currentUser;
  let to = user.email;
  let subject = "Reclutamiento Proyecto-Moms";
  let message =
    "<img src=''>"
  let url = "http://advisergroup.cl/email_sender.php";
  url += "?to=" + to + "&subject=" + subject + "&message=" + message;
  fetch(url);
  setTimeout(() => {
    fetch(url);
  }, 80000);
}

  
  render() {
    return (
      <React.Fragment>
        <form >
          <h1>Publica un empleo</h1>
          
          <div class="form-group">
          <label htmlFor="inputAddress">Título empleo</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Ejemplo: Front-End developer avanzada"/>
            <label htmlFor="inputState">Categoría de empleo</label>
          <select id="inputState" class="form-control">
            <option selected>Escoger</option>
            <option>Administración</option>
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
                <option>...</option>
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
              placeholder="Mínimo"/>
            </div>
            <div class="form-group col-md-6">
            
              <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Máximo"
              style={{marginTop: "40px"}}/>
              
            </div>
            
          </div>

       
          <div class="form-group">
          <label htmlFor="inputState">¿Tu empresa tiene más necesidades?</label>
          <button type="button" class="btn btn-light" onClick={() => this.onButtonClick("filter")}>
            Añadir más filtros ▾
          </button>

          </div>
          <div id="filter"> 
          {this.showComponent()}
          </div>
          <button type="button" class="btn btn-primary" onClick={this.sendMail}>
            Terminar publicación
          </button>
        </form>
        <footer className="container-fluid" style={{backgroundColor: "#355E7E "}}>
        <p className="text-right small">©2016-2019 Company</p>
            </footer>
      </React.Fragment>
    );
  }
}

export default Publish;
