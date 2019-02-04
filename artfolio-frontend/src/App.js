import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <Route exact path='/' component ={Home} />
      <Route path='/about' component ={AboutMe} />
      <Route path='/portfolio' component ={Portfolio} />
      <Route path='/contact' component ={Contact} />
      
      </div>
    );
  }
}

export default App;
