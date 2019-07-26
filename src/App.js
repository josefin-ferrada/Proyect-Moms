import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import  HomeMobile from './Components/homeMobile';

import Dashboard from './Components/dashboard';
import { config } from './firebase/config';
import Home from './Components/home'



class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    config.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render(){
  return (
  <BrowserRouter>
    <Switch>
    
    <Route exact path="/login" component={this.state.user ?  Dashboard : Login}/>
    <Route exact path="/register" component={this.state.user ?  Dashboard : Register} />
    <Route exact path="/" component={HomeMobile} />
    <Route  path="/dashboard" component={this.state.user ?  Dashboard : Login} />
    <Route exact path="/home" component={Home} />
   
  

    </Switch>
  </BrowserRouter>
  );
}
}

export default App