import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

const PostsContainer = styled.div``;

const SectionDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;


  .cardContainer {
      width: 80%;
      border: 1px solid blue;
  }

  .socialContainer {
    width: 20%;
      border: 1px solid blue;
  }
`;

const Posts = (props) => {
  console.log(props)
  return (
    <PostsContainer>
      <h2>Posts</h2>

      <SectionDiv>
        <section className="cardContainer">
          <CardDeck>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
            
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                
              </CardBody>
            </Card>
          </CardDeck>
        </section>
        <section className="socialContainer">
          <div className="card" />
        </section>
      </SectionDiv>
    </PostsContainer>
  );
};

export default Posts;
