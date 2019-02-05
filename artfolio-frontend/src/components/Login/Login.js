import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../NavBar';

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  padding: 20px 20px 80px 20px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/1595242/pexels-photo-1595242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;

  .loginPageLeft {
    border: 1px solid red;
    width: 80%;
    margin: 0 50px;
    color: white;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 50px;
    padding-bottom: 80px;
    height: 500px;
    border: 1px solid #e9e9eb;
    justify-content: center;
    background-color: rgb(218, 218, 218, 0.6);
    border-radius: 7px;
    box-shadow: 1px 1px 5px white;
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      padding: 15px 50px;
      line-height: 1.2;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    h5 {
      font-weight: 600;
      text-align: center;
      padding: 10px 40px;
    }
    .input {
      margin: 5px auto;
      width: 70%;
      border: 2px solid rgb(102, 102, 102);
    }
    .invalid {
      border: 2px solid red;
    }

    .btn {
      width: 50%;
      margin: 0 auto;
      background-color: #101010;
      box-shadow: 2px 2px 5px grey;
      :hover {
        background-color: #2c2c2b;
        font-weight: 600;
        box-shadow: 2px 2px 5px black;
      }
    }

    #aTag {
      font-style: italic;
      font-weight: 400;
      margin: 10px 30px;
      color: black;
    }
  }
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      user: {},
      clicked: false,
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email === '' || this.state.password === '') {
      this.setState({ clicked: true });
      return alert('Please input an email and password to login!');
    }
    ls.set('user', user);
    this.setState({
      user: ls.get('user'),
      clicked: false,
    });
    window.location.reload();
  };

  render() {
    console.log(this.state.clicked);
    return (
      <div>
        <NavBar loggedIn={this.props.loggedIn} logout={this.props.logout} />
        <FormContainer>
          <div className="loginPageLeft">
            <h1>ARTFOLIO</h1>
            <p>
              {' '}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </div>

          <Form className="loginForm">
            <h3>Welcome to ArtFolio-2</h3>
            <h5>Please Login</h5>
            {this.state.clicked ? (
              <Input
                invalid
                className="input invalid"
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            ) : (
              <Input
                className="input"
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            )}
            {this.state.clicked ? (
              <Input
                invalid
                className="input invalid"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            ) : (
              <Input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            )}
            <br />
            <Button className="btn" onClick={this.handleLogin}>
              Login
            </Button>
            <Link id="aTag" to="/login">
              Forgot password?
            </Link>
          </Form>
        </FormContainer>
      </div>
    );
  }
}

Login.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Login;
