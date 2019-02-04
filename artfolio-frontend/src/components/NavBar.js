import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className='navBar'>
        <div className='logo'>
          <NavLink className='links' to="/">
            Artfolio-2
          </NavLink>      
        </div>
        <nav className='navs'>
          <NavLink className='links na' to='/'>
            Home
          </NavLink>
          <NavLink className='links na' to='/about'>
            About Me
          </NavLink>

          <NavLink className='links na' to='/'>
            Portfolio
          </NavLink>
          <NavLink className='links na' to='/'>
            Contact
          </NavLink>
        </nav>
      </div>
    );
  }
}
