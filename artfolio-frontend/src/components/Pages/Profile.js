import React from 'react';
import styled from 'styled-components';
import {
  // CardDeck,
  Card,
  // Button,
  // CardTitle,
  // CardText,
  // Form,
  // FormGroup,
  // Label,
  // Input,
  Jumbotron,
  Container,
} from 'reactstrap';
import Post from '../PostContainer/Post';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from '../../actions';

const ProfileContainer = styled.div`
  background-image: url('https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .jumboProfile {
    background-color: rgb(12, 12, 12, 0.7);
    border: 1px solid red;
    h1 {
      color: white;
    }
    p {
      color: white;
    }
  }
`;

const MainSection = styled.div`
  border: 1px solid red;
  height: 500px;

  .userProfile {
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    background-color: rgb(252, 252, 252, 0.8);

    .profilePic {
      display: inline;
      margin: 10px 30px;
      border: 1px solid blue;
    }
    .profileInfo {
      margin: 50px 20px;
      text-align: justify;
      border: 1px solid red;
    }
  }

  .userPosts {
    border: 1px solid red;
  }
`;

class Profile extends React.Component {
  componentDidMount = () => {
    this.props.fetchPosts();
    this.props.fetchUsers(this.props.user.id);
  };

  render() {
    console.log(this.props.user.id);
    console.log(this.props);
    return (
      <ProfileContainer className="profilePage">
        <Jumbotron fluid className="jumboProfile">
          <Container fluid>
            <h1 className="display-3">Your Profile</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>

        <MainSection>
          <div>
            <section className="userProfile">
              <div className="profilePic">
                <img
                  style={{
                    width: '250px',
                    height: '250px',
                    border: '1px solid blue',
                    borderRadius: '50%',
                  }}
                  src={this.props.user.userImgUrl}
                />
              </div>
              <div className="profileInfo">
                <h4>@{this.props.user.username}</h4>
                <h5>{this.props.user.fullName}</h5>
                <p>{this.props.user.email}</p>
              </div>
            </section>
          </div>

          <section className="userPosts">
            {this.props.userProfile.posts === undefined ? (
              <div style={{border: "1px solid red", padding: '40px 40px 0 0'}}>
                <h3 style={{color:'red',}}>Server Error, Cant find Post!</h3>
                <p  style={{color:'red'}}>Please logout and try again!</p>
              </div>
            ) : (
              <div>
                {this.props.userProfile.posts.map(post => (
                  <Post
                    key={post.id}
                    history={this.props.history}
                    post={post}
                  />
                ))}
              </div>
            )}
          </section>
        </MainSection>
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  userProfile: state.userProfile,
  user: state.user,
});

export default connect(
  mapStateToProps,
  { fetchUsers, fetchPosts },
)(Profile);
