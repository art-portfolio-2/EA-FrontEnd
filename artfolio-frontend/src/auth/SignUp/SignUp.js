import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { register } from '../../actions';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    fullName: '',
    email: '',
    userImgUrl: '',
  };

  handleChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  register = ev => {
    ev.preventDefault();
    this.props.history.push('/login');
    this.props.register(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.register}>
        <h2>Sign Up</h2>
        <FormGroup>
          <Input
            onChange={this.handleChanges}
            type="text"
            name="fullName"
            placeholder="fullname"
            value={this.state.fullName}
          />

          <Input
            onChange={this.handleChanges}
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
          />
          <Input
            onChange={this.handleChanges}
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
          />
          <Input
            onChange={this.handleChanges}
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
          />
          <Input
            onChange={this.handleChanges}
            type="text"
            name="userImgUrl"
            placeholder="user Image Url"
            value={this.state.userImgUrl}
          />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(
  mapStateToProps,
  { register },
)(SignUp);
