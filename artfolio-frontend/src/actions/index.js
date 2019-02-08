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

export const FETCHING_USER_POSTS = 'FETCHING_USER_POSTS'
export const FETCHING_USER_POSTS_SUCCESS = 'FETCHING_USER_POSTS_SUCCESS'
export const FETCHING_USER_POSTS_FAILED = 'FETCHING_USER_POSTS_FAILED'

export const CREATING_POST = 'CREATING_POST';
export const CREATING_POST_SUCCESS = 'CREATING_POST_SUCCESS';
export const CREATING_POST_FAILED = 'CREATING_POST_FAILED';

export const DELETING_POST = 'DELETING_POST';
export const DELETING_POST_SUCCESS = 'DELETING_POST_SUCCESS';
export const DELETING_POST_FAILED = 'DELETING_POST_FAILED';

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
export const FETCHING_USER_FAILED = 'FETCHING_USER_FAILED';

export const UPDATING_POST_SUCCESSFUL = "UPDATING_POST_SUCCESSFUL";

export const login = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('https://backend-art.herokuapp.com/api/login', user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('id', res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
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

export const fetchUserPosts = id => dispatch => {
  dispatch({ type: FETCHING_USER_POSTS });
  axios
    .get(`https://backend-art.herokuapp.com/api/posts/users/${id}`)
    .then(res => dispatch({ type: FETCHING_USER_POSTS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: FETCHING_USER_POSTS_FAILED, payload: err }));
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

export const fetchUser = id => dispatch => {
 console.log(id)
  dispatch({ type: FETCHING_USER });
  axios
    .get(`https://backend-art.herokuapp.com/api/users/${id}`)
    .then(res => dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data[0] }))
    .catch(err => dispatch({ type: FETCHING_USER_FAILED, payload: err }));
};

export const updatePost = (post, id) => dispatch => {

  const token = localStorage.getItem('token')
  const request = { 
      headers: { 
          authorization: token
       }
   }
  axios
  .put(`https://backend-art.herokuapp.com/api/posts/${id}`, post, request)
  .then(res => console.log(res)/*dispatch({type: UPDATING_POST_SUCCESSFUL, payload: res})*/)
  .catch(err => console.log(err))
}