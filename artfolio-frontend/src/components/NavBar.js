import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <a className="links" href="https://artfolio-jm.netlify.com/">
            Artfolio-2
          </a>
        </div>

        <nav className="navs">
          {localStorage.getItem('token') ? (
            <div>
              <NavLink className="links na" to="/profile">
                Profile
              </NavLink>
              <NavLink className="links na" to="/posts">
                Posts
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className="links na" to="/login">
                Profile
              </NavLink>
              <NavLink className="links na" to="/login">
                Posts
              </NavLink>
            </div>
          )}
        </nav>

        <div className="login">
          {localStorage.getItem('token') ? (
            <Link className="links" to="/login">
              <span onClick={this.props.logout}>Log Out</span>
            </Link>
          ) : (
            <Link className="links" to="/login">
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
