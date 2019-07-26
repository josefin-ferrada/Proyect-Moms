import React, { Component } from 'react';
import './../css/dashboard.css';
import Nav from './navbar';
import avatar from '../img/avatar.png';
import config from '../firebase/config';
import { Link } from 'react-router-dom';
import Publish from './publish';
import Publications from './publications';
import Profile from './profile'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponentPublish: false,
            showComponentPublications: false,
            showComponentProfile: false,
          };
        this._onButtonClick = this._onButtonClick.bind(this);
        this.logout = this.logout.bind(this);
    }
    
      _onButtonClick(name) {
        if(name == "publish"){
            this.setState({
                showComponentPublish: true,
                showComponentPublications: false,
                showComponentProfile: false,
                
            })
        }else if(name == "publications"){
            this.setState({
                showComponentPublications: true,
                showComponentPublish: false,
                showComponentProfile: false,
            })
        }else if(name == "profile"){
            this.setState({
                showComponentProfile: true,
                showComponentPublish: false,
                showComponentPublications: false,
            })
        }
        
      }
    

    logout() {
        config.auth().signOut();
    }

    showComponent(){
        if(this.state.showComponentPublish){
           return (<Publish />)
        }else if(this.state.showComponentPublications){
            return (<Publications/>)
        }else if(this.state.showComponentProfile){
            return (<Profile/>)
        }else {
            return null
        }
    }
    render() {
  return (
      <React.Fragment>
         <Nav class="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
            <div class="flex-row d-flex">
                <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Admin Template</a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapsingNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="//www.codeply.com">Link</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                    </li>
                </ul>
            </div>
        </Nav>
        
    <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
            <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                    <li className="nav-item"><a href="javascript:void(0)" value="publications" onClick={() => this._onButtonClick("publications")}>Publicaciones</a></li>
                    <li className="nav-item"><a href="javascript:void(0)" name="publish" onClick={() => this._onButtonClick("publish")}>Publicar</a></li>
                    <li className="nav-item"><a href="javascript:void(0)" onClick={() => this._onButtonClick("profile")}>Perfil</a></li>
                    <Link to="/"><button onClick={this.logout} id="logout">Cerrar sesión</button></Link>
                   
                </ul>
            </div>
        

            <div className="col main pt-5 mt-3">
            {this.showComponent()}
                
                
            </div>
            
        </div>
    </div>
  
    <footer className="container-fluid" style={{backgroundColor: "#355E7E "}}>
        <p className="text-right small">©2016-2018 Company</p>
    </footer>
   
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">Modal</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>This is a dashboard layout for Bootstrap 4. This is an example of the Modal component which you can use to show content.
                    Any content can be placed inside the modal and it can use the Bootstrap grid classes.</p>
                    <p>
                        <a href="https://www.codeply.com/go/KrUO8QpyXP" target="_ext">Grab the code at Codeply</a>
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary-outline" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}
}
export default Dashboard