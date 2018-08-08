import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import "./App.css";
import Callback from './components/Callback/Callback';
import Profile from "./components/Profile/Profile";
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div className="main">
        <Header auth={auth} />
        <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
        <Route exact path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
        <Footer />
      </div>
    </Router>
  );
}