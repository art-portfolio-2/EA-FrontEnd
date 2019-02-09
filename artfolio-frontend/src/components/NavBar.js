import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <a className="links" href="https://artfolio-jm.netlify.com/">
            <span
              style={{
                fontFamily: 'Piedra, cursive',
                fontSize: '22px',
                paddingRight: '5px',
              }}
            >
              Artfolio
            </span>{' '}
            <i className="fas fa-home fa-lg" />
          </a>
        </div>

        <nav className="navs">
          {localStorage.getItem('token') ? (
            <div>
              <NavLink className="links na" to="/profile">
                Profile <i className="fas fa-user-alt fa-sm" />
              </NavLink>
              <NavLink className="links na" to="/posts">
                Posts <i className="fas fa-compass fa-sm" />
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className="links na" to="/login">
                Profile <i className="fas fa-user-alt fa-sm" />
              </NavLink>
              <NavLink className="links na" to="/login">
                Posts <i className="fas fa-compass fa-sm" />
              </NavLink>
            </div>
          )}
        </nav>

        <div className="login">
          {localStorage.getItem('token') ? (
            <Link className="links" to="/login">
              <span onClick={this.props.logout}>
                <span
                  style={{
                    fontFamily: 'Dhurjati, sans-serif',
                    fontSize: '25px',
                  }}
                >
                  Log Out
                </span>{'  '}
                <i className="fas fa-sign-out-alt fa-lg" />
              </span>
            </Link>
          ) : (
            <Link className="links" to="/login">
              <span>
                <i className="fas fa-sign-in-alt fa-lg"> </i>
                <span
                  style={{
                    fontFamily: 'Dhurjati, sans-serif',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Login
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
