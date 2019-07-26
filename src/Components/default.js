import React, { Component } from 'react';
import group from './../img/group.png';
import '../css/default.css';



class Default extends Component {
  /*  getUser() {
     db.collection("Users").get().then(function(querySnapshot) {
         querySnapshot.forEach(function(doc) {
             console.log(doc.id, " => ", doc.data());
         });
     });
   }
   componentDidMount() {
 
     this.getUser()
   } */

  render() {
    return (
      <React.Fragment>
        <div className="contentuser">
          <img src={group} class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"></img>
          <h1>Bienvenido</h1>
          <span class="text-muted">Device agnostic</span>
          <div className="card-body">
          <ul class="list-group list-group-flush">
          <li class="list-group-item" id="optionitem"><i class="fas fa-users"></i>Nuevos Postulantes</li>
    <li class="list-group-item" id="optionitem"><i class="fas fa-check-square"></i>Publicaciones Activas</li>
    <li class="list-group-item" id="optionitem"><i class="fas fa-hands-helping"></i> Tus Contrataciones</li>
  </ul>
  <p id="footerdefault">¿Tienes un nuevo puesto disponible?</p>
  <button type="button" className="btn btn-light m-2" id="publish">HAZ UNA PUBLICACIÓN</button>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Default