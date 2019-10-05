import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import HomePage from "./Components/index";
import SignIn from "./Components/signIn";
import {  Router, BrowserRouter,Switch,Route, Link ,Redirect,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import * as history from 'history';

class App extends Component {
  render() {
    let PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={() => (
        this.props.Auth.isLoggedIn ? <Component /> : <Redirect to='/login' />
      )}
      />);
    return (
      <BrowserRouter >
      <div>
          <Route path="/login" component={SignIn} />
          <PrivateRoute exact path='/' component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Auth: state.Auth
  };
}

export default connect(mapStateToProps, null)(App);;
