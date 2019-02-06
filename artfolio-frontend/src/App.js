import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Route, Redirect } from 'react-router-dom';
import AboutMe from './components/Pages/Profile';
import Home from './components/Pages/Home';
import Posts from './components/Pages/Posts';
import Login from './auth/Login/Login';
import SignUp from './auth/SignUp/SignUp';
import { connect } from 'react-redux';
import ls from 'local-storage';

import './App.css';

// const PrivateRoute = ({ isLoggedIn, ...rest }) => {
//   if (rest.location.pathname === '/login') {
//     return null;
//   }
//   return (
//   //   <Route
//   //     {...rest}
//   //     render={props =>
//   //       !isLoggedIn ? (
//   //         <Posts {...props} />
//   //       ) : (
//   //         //<Login {...props}/> }
//   //         <Redirect to={{ pathname: '/login' }} />
//   //       )
//   //     }
//   //   />
//   // );
// };

class App extends Component {
  // logout = ev => {
  //   ev.preventDefault();
  //   if (ls.get('user')) ls.remove('user');
  //   this.setState({ isLoggedIn: false });
  // };

  // componentDidMount() {
  //   if (ls.get('user')) {
  //     this.setState({ isLoggedIn: true });
  //   }
  // }

  render() {
    return (
      <div className="App">
        <NavBar isLoggedIn={this.props.isLoggedIn} logout={this.logout} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/posts" component={Posts} />
        <Route path="/about" component={AboutMe} />
        {/* <PrivateRoute {...this.props} isLoggedIn={this.props.isLoggedIn} /> */}
        <Route history={this.props.history} path="/login" component={Login} />
        
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(App);
