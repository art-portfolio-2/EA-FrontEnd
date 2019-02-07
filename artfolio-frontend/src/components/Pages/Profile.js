import React from 'react';
import styled from 'styled-components';
import {
  // CardDeck,
  // Card,
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
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from '../../actions'

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
    border: 1px solid red;
  }

  .userPosts {
    border: 1px solid red;
  }
`;

class Profile extends React.Component {
componentDidMount = () => {
  this.props.fetchPosts();
  this.props.fetchUsers()
  
}


  render() {
    console.log(this.props.posts)
    console.log(this.props.userProfile)
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
          <section className="userProfile">
            <img src="" />
            <div className="profileInfo">name</div>
          </section>

          <section className="userPosts">p</section>
        </MainSection>
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  userProfile: state.userProfile,
})

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(Profile);
