import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { Form, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  padding: 200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  .loginForm {
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    width: 40%;
    height: 500px;
    justify-content: center;
    background-color: white;
    border-radius: 7px;
    box-shadow: 2px 2px 5px grey;
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
      border: 2px solid grey;
    }
    .btn {
      width: 50%;
      margin: 0 auto;
      box-shadow: 2px 2px 5px grey;
    }
  }
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      user: {},
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    if (this.state.username === '' || this.state.password === '') {
      return alert('Please input a username and password to login!');
    }
    ls.set('user', user);
    this.setState({
      user: ls.get('user'),
    });
    window.location.reload();
  };

  render() {
    return (
      <FormContainer>
        <Form className="loginForm">
          <h3>Welcome to ArtFolio-2</h3>
          <h5>Please Login</h5>

          <Input
            className="input"
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <Input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <Button className="btn" onClick={this.handleLogin}>
            Login
          </Button>
        </Form>
      </FormContainer>
    );
  }
}

Login.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Login;