import React, { Component } from "react";
import Not from "../img/404.png";
import Nav from "./navbar";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="back">
          <img src={Not} />
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
