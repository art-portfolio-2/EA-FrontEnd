import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deletePost } from '../../actions';

const CardDiv = styled.div`
  padding: 20px 0;

  .postCard {
    box-shadow: 1px 1px 7px black;

    :hover {
      animation-name: trans;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      box-shadow: 3px 3px 7px black;
    }

    @keyframes trans {
      from {
        transform: scale(1, 1);
      }
      to {
        transform: scale(1.1, 1.1);
      }
    }
  }
`;
class Post extends Component {
  deletePost = ev => {
    ev.preventDefault();
    console.log(this.props.post.id);
    this.props.deletePost(this.props.post.id)
    this.props.history.push(`/posts`);
  };

  render() {
    const defaultSrc =
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180';

    console.log(this.props);
    return (
      <CardDiv>
        <Card className="postCard">
          <span onClick={this.deletePost}>delete</span>
          <CardImg
            top
            style={{ width: '256px', height: '180px' }}
            width="100%"
            src={this.props.post.imageUrl}
            alt={this.props.post.postName}
          />
          <CardBody style={{ width: '256px', height: '100px' }}>
            <CardTitle>{this.props.post.postName}</CardTitle>
            <CardSubtitle>
              {this.props.post.description === null ||
              this.props.post.description === '' ? (
                <p>No description provided</p>
              ) : (
                this.props.post.description
              )}
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardDiv>
    );
  }
}

export default connect(
  null,
  { deletePost },
)(Post);
