import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';

const CardDiv = styled.div`
  padding: 20px 0;
  margin: 20px 30px;
  .actionSpan {
    :hover {
      color: red;
    }
  }

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

class ProfilePosts extends Component {
  render() {
    return (
      <CardDiv>
        <Card className="postCard" style={{ cursor: 'pointer' }}>
          {this.props.post.userId === this.props.id ? 
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 10px'}}>
            <span 
            className='actionSpan'
            style={{ cursor: 'pointer' }}
            onClick={ev => this.props.update(ev, this.props.post)}
          >
            <i class="fas fa-pencil-alt fa-lg"></i>
          </span>
          <span 
          className='actionSpan'
          style={{ cursor: 'pointer' }} 
          onClick={this.deletePost}>
            <i class="fas fa-trash-alt fa-lg"></i>
          </span>
          </div>
           : null}
          <CardImg
            top
            style={{ width: '256px', height: '180px' }}
            width="100%"
            src={this.props.post.imageUrl}
            alt={this.props.post.postName}
          />
          <CardBody style={{ width: '256px', height: '100px' }}>
            <CardTitle>
              <h6>{this.props.post.postName}</h6>
            </CardTitle>
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

export default ProfilePosts;
