import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const TOGGLE_FAILED_LOGIN = 'TOGGLE_FAILED_LOGIN'

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHING_POSTS_SUCCESS = 'FETCHING_POSTS_SUCCESS';
export const FETCHING_POSTS_FAILED = 'FETCHING_POSTS_FAILED';

export const CREATING_POST = 'CREATING_POST';
export const CREATING_POST_SUCCESS = 'CREATING_POST_SUCCESS';
export const CREATING_POST_FAILED = 'CREATING_POST_FAILED';

export const DELETING_POST = 'DELETING_POST';
export const DELETING_POST_SUCCESS = 'DELETING_POST_SUCCESS';
export const DELETING_POST_FAILED = 'DELETING_POST_FAILED';

export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILED = 'FETCHING_USERS_FAILED';

export const login = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('https://backend-art.herokuapp.com/api/login', user)
    .then(res => {
      console.log('this logged');
      console.log(res.data)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('id', res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
      console.log(res.data);
    })
    .catch(err => dispatch({
      type: LOGIN_FAILED,
      payload: err,
    }),);
};

export const toggleLogin = () => dispatch => {
  dispatch({ type: TOGGLE_FAILED_LOGIN })
}

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT_SUCCESS });
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('id');
};

export const register = newUser => dispatch => {
  //dispatch({ type: REGISTER_START });
  axios
    .post('https://backend-art.herokuapp.com/api/register', newUser)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCHING_POSTS });
  axios
    .get('https://backend-art.herokuapp.com/api/posts')
    .then(res => dispatch({ type: FETCHING_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_POSTS_FAILED, payload: err }));
};

export const createPost = post => dispatch => {
  const token = localStorage.getItem('token');
  const request = {
    headers: {
      authorization: token,
    },
  };
  dispatch({ type: CREATING_POST });
  axios
    .post('https://backend-art.herokuapp.com/api/posts', post, request)
    .then(res => dispatch({ type: CREATING_POST_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: CREATING_POST_FAILED,
        payload: err,
      }),
    );
};

export const deletePost = id => dispatch => {
  const token = localStorage.getItem('token');
  const request = {
    headers: {
      authorization: token,
    },
  };
  dispatch({ type: DELETING_POST });
  alert('Are You SURE??')
  axios
    .delete(`https://backend-art.herokuapp.com/api/posts/${id}`, request)
    .then(res => dispatch({ type: DELETING_POST_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: DELETING_POST_FAILED,
        payload: err,
      }),
    );
};

export const fetchUsers = id => dispatch => {
  dispatch({ type: FETCHING_USERS });
  axios
    .get(`https://backend-art.herokuapp.com/api/users/posts/${id}`)
    .then(res => dispatch({ type: FETCHING_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_USERS_FAILED, payload: err }));
};