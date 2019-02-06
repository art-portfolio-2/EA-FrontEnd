import React from 'react';
import { Jumbotron } from 'reactstrap';

const Profile = () => {
  return (
    <div className="aboutPage">
      <Jumbotron fluid>
        <div className="jumbo">
          <h1>Profile</h1>
          <p className="lead">- Client Name</p>
        </div>
      </Jumbotron>
      <section className="mainContent" />
    </div>
  );
};

export default Profile;
