import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="navBar">
        <div className="logo">
          <NavLink className="links" to="/">
            Artfolio-2
          </NavLink>
        </div>
        <nav className="navs">
          <NavLink className="links na" to="/">
            Home
          </NavLink>
          <NavLink className="links na" to="/about">
            About Me
          </NavLink>

          <NavLink className="links na" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="links na" to="/contact">
            Contact
          </NavLink>
        </nav>
        <div className="login">
          {this.props.loggedIn ? (
            <NavLink className="links" to="/">
              <span>Log Out</span>
            </NavLink>
          ) : (
            <NavLink className="links" to="/">
              <span>Login</span>
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}
