import React from 'react';
import '../css/homeMobile.css';
import {Link} from 'react-router-dom';
import image1 from '../img/home-purpose_1.jpg';
import image3 from '../img/home-purpose_3.jpg';
import image4 from '../img/case-study1.jpg';
import image5 from '../img/case-study2.jpg';
import Nav from './navbar';
import image6 from '../img/EY.jpg';
import image7 from '../img/pepsico.jpg';
import image8 from '../img/p&g.jpg';
import image9 from '../img/achs.jpg';
import image10 from '../img/marsol.jpg';
import image11 from '../img/bci.jpg';
import logo from '../img/logo.svg';

function Home() {
    return (

        <React.Fragment>
                      
                  <Nav></Nav>
          <div className="back-intro">
            <div className="container-intro">
              <p className="par">CIENTOS DE MUJERES Y EMPRESAS CONFÍAN EN NOSOTROS</p>
              <p id="first-title">Te ayudamos a cubrir puestos de trabajo según tus necesidades.</p>
              <button type="button" class="btn btn-primary">REGISTRA TU EMPRESA</button>
            </div>
          </div>
          <div className="second-intro">
            <div className="container-intro">
              <p className="par">CIENTOS DE MUJERES Y EMPRESAS CONFÍAN EN NOSOTROS</p>
              <p id="first-title">Te ayudamos a cubrir puestos de trabajo según tus necesidades.</p>
              <button type="button" class="btn btn-primary">REGISTRA TU EMPRESA</button>
            </div>
          </div>

        </React.Fragment>
    );
}

export default Home;