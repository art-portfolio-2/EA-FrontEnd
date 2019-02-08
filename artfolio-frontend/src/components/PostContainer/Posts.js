import React from 'react';
import styled from 'styled-components';
import {
  CardDeck,
  Card,
  Button,
  CardTitle,
  CardText,
  Jumbotron,
  Container,
} from 'reactstrap';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPosts, updatePost } from '../../actions';

const PostsContainer = styled.div`
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

  .cardsContainer {
    width: 80%;
    padding: 10px 50px 10px 50px;
    .btn {
        min-height: 30px;
        width: 80%;
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

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  update = (ev, post) => {
    ev.preventDefault();
    this.props.history.push('/posts');
    this.props.updatePost(post);
  }

  redirect = ev => {
    ev.preventDefault()
    this.props.history.push('/posts/create-post');
  }

  render() {
    console.log(this.props);
    return (
      <PostsContainer className='postsPage'>
        <Jumbotron fluid className="jumboPosts">
          <Container fluid>
            <h1 className="display-3">Explore Posts</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>

        <SectionDiv>
          <section className="cardsContainer">
          <Button onClick={this.redirect} className='btn' >Upload your Post</Button>
            <CardDeck>
              {this.props.posts.map(post => (
                <Post key={post.id} history={this.props.history} update={this.update} post={post} />
              ))}
            </CardDeck>
            <Button onClick={this.redirect} className='btn' >Upload your Post</Button>
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
      </PostsContainer>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(
  mapStateToProps,
  { fetchPosts, updatePost },
)(Posts);
