import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import AboutMe from './components/Pages/AboutMe';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';
import authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';

import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} logout={this.props.logout}/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default authenticate(App)(Login);
