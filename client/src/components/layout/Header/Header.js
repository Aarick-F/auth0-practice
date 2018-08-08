import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    console.log("logout clicked");
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="header">
        <Link to="/"><h1>Auth0</h1></Link>
        {
          !isAuthenticated()
          ? <div className="button" onClick={this.login.bind(this)}>Login</div>
          : <div className="button" onClick={this.logout.bind(this)}>Logout</div>
        }
        
      </div>
    );
  }
}

export default Header;