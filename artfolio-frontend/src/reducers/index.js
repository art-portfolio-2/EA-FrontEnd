import {
  LOGIN_SUCCESS,
  LOG_OUT_SUCCESS,
  REGISTER_SUCCESS,
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAILED,
} from '../actions';

const initialState = {
  posts: [],
  isLoggedIn: false,
  fetchingPosts: false,
  error: null,
  users: [
    {
      username: 'brooks',
      password: '1234',
      fullName: 'Brooks Poltl',
      email: 'bpoltl1@gmail.com',
      userImgUrl: 'something.jpg',
    },
  ],
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
    case LOG_OUT_SUCCESS:
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
    case FETCHING_POSTS:
      return {
        ...state,
        posts: [],
        fetchingPosts: true,
        error: null,
      };
    case FETCHING_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false,
        error: null,
      };
    case FETCHING_POSTS_FAILED:
      return {
        ...state,
        posts: [],
        fetchingPosts: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
