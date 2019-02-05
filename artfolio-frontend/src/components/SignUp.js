import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

class SignUp extends Component {
  render() {
    return (
        
      <Form onSubmit={}>
        <h2>Sign Up</h2>
        <FormGroup>
          <Input onChange={() =>} type="text" placeholder="email" />
          <Input onChange={() =>} type="password" placeholder="password" />
        </FormGroup>
        <Button type="submit"> Sign Up</Button>
      </Form>
    );
  }
}

export default SignUp;
