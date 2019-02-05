import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    console.log(this.props.loggedIn);
    return (
      <div className="navBar">
        <div className="logo">
          <NavLink className="links" to="/">
            Artfolio-2
          </NavLink>
        </div>
        {this.props.loggedIn ? (
          <nav className="navs">
            <NavLink className="links na" to="/">
              Home
            </NavLink>
            <NavLink className="links na" to="/about">
              About Me
            </NavLink>

            <NavLink className="links na" to="/posts">
              Posts
            </NavLink>
            <NavLink className="links na" to="/contact">
              Contact
            </NavLink>
          </nav>
        ) : null}
        <div className="login">
          {this.props.loggedIn ? (
            <Link className="links" to="/">
              <span onClick={this.props.logout}>Log Out</span>
            </Link>
          ) : (
            <Link className="links" to="#">
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
