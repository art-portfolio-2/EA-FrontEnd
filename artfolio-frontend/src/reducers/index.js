import {
  LOGIN_SUCCESS,
  LOG_OUT_SUCCESS,
  REGISTER_SUCCESS,
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAILED,
  CREATING_POST,
  CREATING_POST_SUCCESS,
  CREATING_POST_FAILED,
  DELETING_POST,
  DELETING_POST_SUCCESS,
  DELETING_POST_FAILED,
} from '../actions';

const initialState = {
  posts: [],
  isLoggedIn: false,
  fetchingPosts: false,
  token: null,
  creatingPost: false,
  deletingPost: false,
  error: null,
  user: {
    username: '',
    password: '',
    fullName: '',
    email: '',
    userImgUrl: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('this logged');
      return {
        ...state,
        token: localStorage.token,
        username: localStorage.username,
        isLoggedIn: true,
        user: action.payload.data,
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

    case CREATING_POST:
      return {
        ...state,
        posts: [],
        creatingPost: true,
        error: null,
      };
    case CREATING_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        creatingPost: false,
        error: null,
      };
    case CREATING_POST_FAILED:
      return {
        ...state,
        posts: [],
        creatingPost: false,
        error: action.payload,
      };

      case DELETING_POST:
      return {
        ...state,
        posts: [],
        deletingPost: true,
        error: null,
      };
    case DELETING_POST_SUCCESS:
      return {
        ...state,
    
        deletingPost: false,
        error: null,
      };
    case DELETING_POST_FAILED:
      return {
        ...state,
        posts: [],
        deletingPost: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
