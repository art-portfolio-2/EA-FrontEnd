import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Profile from './components/Pages/Profile';
import Posts from './components/PostContainer/Posts';
import Login from './auth/Login/Login';
import SignUp from './auth/SignUp/SignUp';
import { connect } from 'react-redux';
import PostForm from './components/PostContainer/PostForm';
import { logOut } from './actions';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar logout={this.props.logOut} />
        {this.props.loginFailed && this.props.history.push('/login') }
        {localStorage.getItem('token') ? (
          <Route exact path="/posts" component={Posts} />
        ) : (
          <Route history={this.props.history} path="/login" component={Login} />
        )}
        {localStorage.getItem('token') ? (
          <Route path="/profile" component={Profile} />
        ) : (
          <Route history={this.props.history} path="/login" component={Login} />
        )}
        {localStorage.getItem('token') ? (
          <Route path="/posts/create-post" component={PostForm} />
        ) : (
          <Route history={this.props.history} path="/login" component={Login} />
        )}

        <Route path="/signup" component={SignUp} />
        <Route exact path='/' component={Profile}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  loginFailed: state.loginFailed,
});

export default connect(
  mapStateToProps,
  { logOut },
)(App);
