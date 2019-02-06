import React from 'react';
import styled from 'styled-components';
import { CardDeck, Card, Button, CardTitle, CardText } from 'reactstrap';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

const PostsContainer = styled.div`
  border: 1px solid red;
  background-image: url('https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const SectionDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;

  .cardsContainer {
    width: 80%;
    border: 1px solid blue;
    padding:  10px 50px 10px 50px;
  }

  .socialContainer {
    width: 20%;
    border: 1px solid blue;
    .socialCard {
      background-color: rgb(218, 218, 218, 0.4);
      border: 1px solid blue;
      border-radius: 7px;
      box-shadow: 1px 1px 5px black;
      margin-bottom: 10px;
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
    p {
      color: black
    }
    }
  }
`;

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <PostsContainer>
        <h2>Posts</h2>

        <SectionDiv>

          <section className="cardsContainer">
            <CardDeck>
              {this.props.posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </CardDeck>
          </section>

          <section className="socialContainer">
            <div>
              <Card body className="text-left socialCard">
                <CardTitle><h5>Facebook</h5></CardTitle>
                <CardText><p>With supporting text below as a natural lead-in to additional
                  content.</p>
                  
                </CardText>
                <Button className="btn">Go somewhere</Button>
              </Card>
              <Card body className="text-left socialCard">
                <CardTitle><h5>Instagram</h5></CardTitle>
                <CardText><p> With supporting text below as a natural lead-in to additional
                  content.</p>
                 
                </CardText>
                <Button className="btn">Go somewhere</Button>
              </Card>
              <Card body className="text-left socialCard">
                <CardTitle><h5>Twitter</h5></CardTitle>
                <CardText><p>With supporting text below as a natural lead-in to additional
                  content.</p>
                  
                </CardText>
                <Button className="btn">Go somewhere</Button>
              </Card>
              <Card body className="text-left socialCard">
                <CardTitle><h5>LinkedIn</h5></CardTitle>
                <CardText><p>With supporting text below as a natural lead-in to additional
                  content.</p>
                  
                </CardText>
                <Button className="btn">Go somewhere</Button>
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
  { fetchPosts },
)(Posts);
