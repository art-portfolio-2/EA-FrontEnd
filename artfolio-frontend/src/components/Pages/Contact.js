import React from 'react';
import styled from 'styled-components';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const ContactDiv = styled.div`
  border: 1px solid red;
`;
const ContactSection = styled.section`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
`;

const FormItem = styled.div`
  border: 1px solid red;
  height: 700px;
  width: 80%;
  padding: 50px 100px 0 0;
`;
const Social = styled.div`
  border: 1px solid red;
  height: 700px;
`;

const Contact = () => {
  return (
    <ContactDiv>
      <h2>Contact</h2>
      <ContactSection>
        <FormItem>
        <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
           
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
        </FormItem>
        <Social />
      </ContactSection>
    </ContactDiv>
  );
};

export default Contact;
