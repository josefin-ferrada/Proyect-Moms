import React, { Component } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import '../css/homeMobile.css';


class Nav extends Component{
    render(){

  return (
    <React.Fragment>
        {
            <nav class="navbar navbar-expand-lg navbar-dark">
            <img src={logo} style={{width: "100px"}}></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav float-right text-right pr-3">
                <li className="nav-item">
                    <a href="/#" className="nav-link">Iniciar Sesión<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Sobre nosotros <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Servicios</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Contáctanos</a>
                </li>
                </ul>
            </div>
        </nav>/* <nav class="navbar navbar-expand-lg navbar-dark">
        <img src={logo} style={{width: "100px"}}></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav float-right text-right pr-3">
            <li className="nav-item">
                <a href="/#" className="nav-link">Sobre nosotros <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a href="/#" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
                <a href="/#" className="nav-link">Contáctanos</a>
            </li>
            </ul>
        </div>
    </nav> */}

  </React.Fragment>
  /* 
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="logomoms">
        <Link to="/home"><img src={logo} id="logo-nav" alt="logo"/></Link>
    </div>

    <div className="info col col-lg-7 col-md-6">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/#" className="nav-link">Sobre nosotros <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a href="/#" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
                <a href="/#" className="nav-link">Contáctanos</a>
            </li>
        </ul>
        </div>
        </div>
        
        <div className="buttons col col-lg-3 col-md-3">
         <Link to="/login"> <button type="button" className="btn btn-light m-2" id="ingresa">INGRESA</button></Link>
        </div>
</nav> */
) }
}

export default Nav