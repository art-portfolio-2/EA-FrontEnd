import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="navBar">
        <div className="logo">
          <NavLink className="links" to="/">
            Artfolio-2
          </NavLink>
        </div>
        {/* {this.props.isLoggedIn ? ( */}
          <nav className="navs">
            <NavLink className="links na" to="/profile">
              Profile
            </NavLink>
            <NavLink className="links na" to="/posts">
              Posts
            </NavLink>

          </nav>
        {/* ) : null} */}
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
