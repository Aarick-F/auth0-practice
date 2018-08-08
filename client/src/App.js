import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Auth from "./Auth/Auth";
import './App.css';

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

const auth = new Auth();

class App extends Component {
  render() {
    return (
      <div className="main"></div>
    );
  }
}

export default App;
