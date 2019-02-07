import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Container,
} from 'reactstrap';
import { createPost } from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-image: url('https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .jumboPosts {
    background-color: rgb(12, 12, 12, 0.7);

    h1 {
      color: white;
    }
    p {
      color: white;
    }
  }
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: row;

  .inputContainer {
    width: 80%;
    padding: 10px 200px 10px 200px;
    .formInput {
        border: 1px solid black;
    }
    .formLabel {
        display: flex;
        margin-left: 10px;
        color: white;
        font-weight: bold;

    }
    .btn {
      min-height: 30px;
      width: 50%;
      margin: 50px auto;
      background-color: #101010;
      box-shadow: 1px 1px 2px grey;
      :hover {
        background-color: #2c2c2b;
        font-weight: 600;
        box-shadow: 2px 2px 5px black;
      }
    }
  }

  .socialContainer {
    width: 20%;
    padding: 30px 10px 0px 0px;
    .socialCard {
      background-color: rgb(218, 218, 218, 0.4);
      border-radius: 7px;
      box-shadow: 1px 1px 5px black;
      margin-bottom: 10px;
      border: 1px solid grey;
      .btn {
        min-height: 30px;
        width: 80%;
        margin: 0 auto;
        background-color: #101010;
        box-shadow: 1px 1px 2px grey;
        :hover {
          background-color: #2c2c2b;
          font-weight: 600;
          box-shadow: 2px 2px 5px black;
        }
      }
      h5 {
        color: black;
        text-shadow: 1px 1px 1px grey;
      }
      .cardText {
        color: black;
      }
    }
  }
`;

class PostForm extends Component {
  state = {
    postName: '',
    imageUrl: '',
    description: '',
  };

  createPost = ev => {
    ev.preventDefault();
    this.props.history.push(`/posts`);
    this.props.createPost(this.state);
  };

  handleChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <FormContainer>
        <Jumbotron fluid className="jumboPosts">
          <Container fluid>
            <h1 className="display-3">Add a Photo</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>

        <SectionDiv>
          <section className="inputContainer">
            <Form onSubmit={this.createPost}>
              <FormGroup>
                <Label className="formLabel" for="postName">
                  Title
                </Label>
                <Input
                  className="formInput"
                  type="text"
                  name="postName"
                  value={this.state.postName}
                  onChange={this.handleChanges}
                  id="postName"
                  placeholder="Add a Title"
                />
              </FormGroup>
              <FormGroup>
                <Label className="formLabel" for="description">
                  Description
                </Label>
                <Input
                  className="formInput"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChanges}
                  id="description"
                  placeholder="Add a Description"
                />
              </FormGroup>
              <FormGroup>
                <Label className="formLabel" for="imageUrl">
                  Photo Url
                </Label>
                <Input
                  className="formInput"
                  type="url"
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={this.handleChanges}
                  id="imageUrl"
                  placeholder="Insert image url"
                />
              </FormGroup>
              <Button type="submit">Post Photo</Button>
            </Form>
          </section>

          <section className="socialContainer">
            <div>
              <Card body className="text-left socialCard">
              <CardTitle>
                  <h5>Facebook</h5>
                </CardTitle>
                <CardText className="cardText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href='https://www.facebook.com/' target='_blank' className="btn">Facebook</Button>
              </Card>
              <Card body className="text-left socialCard">
                <CardTitle>
                  <h5>Instagram</h5>
                </CardTitle>
                <CardText className="cardText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href='https://www.instagram.com' target='_blank' className="btn">Instagram</Button>
              </Card>
              <Card body className="text-left socialCard">
                <CardTitle>
                  <h5>Twitter</h5>
                </CardTitle>
                <CardText className="cardText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href='https://twitter.com/' target='_blank' className="btn">Twitter</Button>
              </Card>
              <Card body className="text-left socialCard">
                <CardTitle>
                  <h5>LinkedIn</h5>
                </CardTitle>
                <CardText className="cardText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button href='https://www.linkedin.com/' target='_blank' className="btn">LinkedIn</Button>
              </Card>
            </div>
          </section>
        </SectionDiv>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  { createPost },
)(PostForm);
