import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_START,
  REGISTER_SUCCESS,
} from '../actions';

const initialState = {
  posts: [],
  isLoggedIn: false,
  users: [{
    username: 'brooks',
    password: '1234',
    fullName: 'Brooks Poltl',
    email: 'bpoltl1@gmail.com',
    userImgUrl: 'something.jpg',
  }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('this logged');
      return {
        ...state,
        isLoggedIn: true,
        //users: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
