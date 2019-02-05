import React from 'react';
import { Jumbotron } from 'reactstrap';

const AboutMe = () => {
  return (
    <div className="aboutPage">
      <Jumbotron fluid>
        <div className="jumbo">
          <h1>About Me</h1>
          <p className="lead">- Client Name</p>
        </div>
      </Jumbotron>
      <section className="mainContent" />
    </div>
  );
};

export default AboutMe;
