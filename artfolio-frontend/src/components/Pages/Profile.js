import React from 'react';
import styled from 'styled-components';
import { CardDeck, Jumbotron, Container } from 'reactstrap';
import Loader from 'react-loader-spinner';
import ProfilePosts from './ProfilePosts';
import { connect } from 'react-redux';
import { fetchUser, fetchPosts, fetchUserPosts } from '../../actions';

const ProfileContainer = styled.div`
  background-image: url('https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;

  .jumboProfile {
    background-color: rgb(12, 12, 12, 0.7);
    h1 {
      color: white;
    }
    p {
      color: white;
    }
  }
`;

const MainSection = styled.div`
  height: 100%;

  .userProfile {
    display: flex;
    flex-direction: row;
    background-color: rgb(252, 252, 252, 0.8);
    justify-content: center;
    align-content: center;
    height: 300px;

    .profilePic {
      display: block;
      margin: 30px 20px 0px 30px;
    }
    .profileInfo {
      display: inline-block;
      margin: 100px 20px 20px 20px;
      text-align: center;
    }
  }

  .userPosts {
  }
`;

class Profile extends React.Component {
  state = {
    id: null,
  };

  componentDidMount = () => {
    const userId = Number(localStorage.getItem('id'));
    this.props.fetchUser(userId);
    this.props.fetchUserPosts(userId);
  };

  render() {

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

        {this.props.fetchingUser ? (
          <Loader type="Bars" color="green" height={80} width={80} />
        ) : (
          <MainSection>
            <div>
              <section className="userProfile">
                <div className="profilePic">
                  <img
                    style={{
                      width: '250px',
                      height: '250px',
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
              {this.props.userPosts === undefined ? (
                <div style={{ padding: '40px 40px 0 0' }}>
                  <h3 style={{ color: 'red' }}>
                    Server Error, Cant find Post!
                  </h3>
                  <p style={{ color: 'red' }}>Please logout and try again!</p>
                </div>
              ) : (
                <CardDeck>
                  {this.props.userPosts.map(post => (
                    <ProfilePosts
                      key={post.id}
                      history={this.props.history}
                      post={post}
                    />
                  ))}
                </CardDeck>
              )}
            </section>
          </MainSection>
        )}
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => ({
  fetchingUser: state.fetchingUser,
  user: state.user,
  userPosts: state.userPosts,
});

export default connect(
  mapStateToProps,
  { fetchUser, fetchPosts, fetchUserPosts },
)(Profile);
