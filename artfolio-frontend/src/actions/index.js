import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOG_OUT = 'LOG_OUT';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = user => dispatch => {
  console.log(user);
  console.log('action logged');
  dispatch({ type: LOGIN_START });
  axios
    .post('https://backend-art.herokuapp.com/api/login', user)
    .then(res => { dispatch({ type: LOGIN_SUCCESS, payload: res });
      console.log('this post logged');
    })
    .catch(err => console.log(err));
};

export const logOut = () => ({ type: LOG_OUT });

export const register = newUser => dispatch => {
  //dispatch({ type: REGISTER_START });
  axios
    .post('https://backend-art.herokuapp.com/api/register', newUser)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }),
    )
    .catch(err => console.log(err.message));
};
