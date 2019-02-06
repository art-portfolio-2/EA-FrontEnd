import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <NavLink className="links" to="/">
            Artfolio-2
          </NavLink>
        </div>
        {/* {this.props.isLoggedIn ? ( */}
          <nav className="navs">
            <NavLink className="links na" to="/about">
              Profile
            </NavLink>
            <NavLink className="links na" to="/">
              Posts
            </NavLink>

          </nav>
        {/* ) : null} */}
        <div className="login">
          {/* {this.props.isLoggedIn ? ( */}
            <Link className="links" to="/login">
              <span onClick={this.props.logout}>Log Out</span>
            </Link>
          {/* ) : ( */}
            <Link className="links" to="/signup">
              <span>Sign Up</span>
            </Link>
          {/* )} */}
        </div>
      </div>
    );
  }
}
