import React from 'react';
import ls from 'local-storage';

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    logout = ev => {
      //ev.preventDefault();
      if (ls.get('user')) ls.remove('user');
      this.setState({ loggedIn: false });
    };

    componentDidMount() {
      if (ls.get('user')) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            <App loggedIn={this.state.loggedIn} logout={this.logout} />
          ) : (
            <Login />
          )}
        </div>
      );
    }
  };

export default authenticate;
