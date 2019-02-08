import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login, toggleLogin } from '../../actions';

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
  font-family: Dhurjati, sans-serif;
  font-size: 20px;

  .loginPageLeft {
    width: 80%;
    margin: 0 50px;
    color: white;
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    border-radius: 7px;
    padding: 10px 30px;

    :hover {
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      box-shadow: 1px 1px 5px #0f0f0f;
    }
    @keyframes fadeIn {
      from {
        transform: scale(1, 1);
      }
      to {
        transform: scale(1.1, 1.1);
        background-color: rgb(12, 12, 12, 0.7);
        box-shadow: 1px 1px 5px black;
      }
    }
    @keyframes fadeOut {
      from {
        transform: scale(1.1, 1.1);
        background-color: rgb(12, 12, 12, 0.7);
        box-shadow: 1px 1px 5px black;
      }
      to {
        transform: scale(1, 1);
      }
    }
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
      padding: 10px 40px 0px 40px;
      margin-bottom: -5px;
    }
    .input {
      margin: 5px auto 5px auto;
      width: 70%;
      border: 2px solid rgb(102, 102, 102);
      font-size: 22px;
    }
    .invalid {
      border: 2px solid red;
    }

    .btn {
      min-height: 30px;
      width: 50%;
      margin: 0 auto;
      padding: 0;
      background-color: #101010;
      box-shadow: 2px 2px 5px grey;
      :hover {
        background-color: #2c2c2b;
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
  state = {
    username: '',
    password: '',
  };

  componentDidMount = () => {
    this.props.toggleLogin();
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    // const user = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    // if (this.state.email === '' || this.state.password === '') {
    //   this.setState({ clicked: true });
    //   return alert('Please input an email and password to login!');
    // }
    this.props.login(this.state);
    !this.props.isLoggingIn && this.props.history.push('/profile');

    //ls.set('user', user)
  };

  render() {
    return (
      <div>
        <FormContainer>
          <div className="loginPageLeft">
            <h1 style={{ fontFamily: 'Piedra, cursive' }}>ARTFOLIO</h1>
            <p>
              {' '}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </div>

          <Form onSubmit={this.handleLogin} className="loginForm">
            <h3
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              Welcome to{' '}
              <span
                style={{ fontFamily: 'Piedra, cursive', marginTop: '10px' }}
              >
                ArtFolio
              </span>
            </h3>
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
            <Button className="btn" type="submit">
              Login
            </Button>
            <Link id="aTag" to="/login">
              Forgot password?
            </Link>
            <span>Dont have an account?</span>
            <Link style={{marginTop: '-5px'}} id="aTag" to="/signup">
              Sign Up
            </Link>
          </Form>
        </FormContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  loginFailed: state.loginFailed,
  isLoggingIn: state.isLoggingIn,
});

Login.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { login, toggleLogin },
)(Login);
