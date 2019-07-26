import React from "react";
import "../css/homeMobile.css";
import { Link } from "react-router-dom";
import image1 from "../img/home-purpose_1.jpg";
import image3 from "../img/home-purpose_3.jpg";
import image4 from "../img/case-study1.jpg";
import image5 from "../img/case-study2.jpg";
import Nav from "./navbar";
import image6 from "../img/EY.jpg";
import image7 from "../img/pepsico.jpg";
import image8 from "../img/p&g.jpg";
import image9 from "../img/achs.jpg";
import image10 from "../img/marsol.jpg";
import image11 from "../img/bci.jpg";
import logo from "../img/logo.svg";

function Home() {
  return (
    <React.Fragment>
      <Nav />
      <div className="back-intro">
        <div className="container-intro">
          <p className="parWhite">
            CIENTOS DE MUJERES Y EMPRESAS CONFÍAN EN NOSOTROS
          </p>
          <p id="first-title">
            Te ayudamos a cubrir puestos de trabajo según tus necesidades.
          </p>
          <button type="button" class="btn btn-primary">
            REGISTRA TU EMPRESA
          </button>
        </div>
      </div>
      <div className="second-intro">
        <div className="container-intro">
          <p className="parPink">NUESTRO ENFOQUE</p>
          <p id="second-title">Ten el talento que buscas según tu medida.</p>
          <div class="card" style={{ width: "18rem" }}>
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">El mejor Fit</h5>
              <p class="card-text">
                Encuentra la candidata que más se ajuste a tus requerimientos
                específicos
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={image3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Gestionamos</h5>
              <p class="card-text">
                Te ayudamos a gestionar la cantidad de posibles postulantes
                según el tipo de trabajo: Part-time, Full-time o Proyectos
                individuales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="back-intro">
        <div className="container-intro">
          <p id="first-title">Haz un impacto positivo</p>
          <p className="parWhite">
            Podrás pertenecer al grupo de compañias que promueven la igualdad de
            género y la inclusión laboral de mujeres
          </p>
          <button type="button" class="btn end-btn">
            APRENDE MÁS AQUÍ
          </button>
        </div>
      </div>
      <footer>
        <p className="parBlue">NUESTROS CLIENTES</p>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src={image6} style={{ width: "70px" }} />
            </div>
            <div class="col">
              <img src={image7} style={{ width: "70px" }} />
            </div>
            <div class="col">
              <img src={image8} style={{ width: "70px" }} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img src={image9} style={{ width: "70px" }} />
            </div>
            <div class="col">
              <img src={image10} style={{ width: "70px" }} />
            </div>
            <div class="col">
              <img src={image11} style={{ width: "70px" }} />
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <div class="container">
          <div class="row">
            <div class="col">
              <p className="parCopy">
                © Copyright ProyectoMoms 2019. Todos los Derechos Reservados.
              </p>
            </div>
            <div class="col" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
