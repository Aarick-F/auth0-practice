import React, { Component } from "react";
import "./callback.css";

class Callback extends Component {
  render() {
    return (
      <div className="callbackWarpper">
        <ul className="loader">
          <li className="ball"></li>
          <li className="ball"></li>
          <li className="ball"></li>
          <li className="ball"></li>
          <li className="ball"></li>
        </ul>
      </div>
    );
  }
}

export default Callback;