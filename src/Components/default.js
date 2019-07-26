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
          <img src={group} class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"></img>
                    <h1>Bienvenido</h1>
                    <span class="text-muted">Device agnostic</span>
       
       
    </React.Fragment>
  );
}
}

export default Default