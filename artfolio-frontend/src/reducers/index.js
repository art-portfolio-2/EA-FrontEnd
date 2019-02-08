import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOG_OUT_SUCCESS,
  TOGGLE_FAILED_LOGIN,
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
  FETCHING_USERS,
FETCHING_USERS_SUCCESS,
FETCHING_USERS_FAILED,
} from '../actions';

const initialState = {
  posts: [],
  isLoggedIn: false,
  fetchingPosts: false,
  fetchingUsers: false,
  loginFailed: false,
  isLoggingIn: false,
  token: null,
  creatingPost: false,
  deletingPost: false,
  error: null,
  userProfile: [],
  user: {
    id: null,
    username: '',
    password: '',
    fullName: '',
    email: '',
    userImgUrl: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    return {
      ...state,
      isLoggingIn: true,
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: localStorage.token,
        username: localStorage.username,
        id: localStorage.id,
        isLoggedIn: true,
        isLoggingIn: false,
        loginFailed: false,
        user: action.payload.data,
      };
      case LOGIN_FAILED:
      return {
        ...state,
        loginFailed: true,
        isLoggedIn: false,
        error: action.payload,
      };
      case TOGGLE_FAILED_LOGIN:
      return {
        ...state,
        loginFailed: false,
      }

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

      case FETCHING_USERS:
      return {
        ...state,
        userProfile: [],
        fetchingUser: true,
        error: null,
      };
    case FETCHING_USERS_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        fetchingUser: false,
        error: null,
      };
    case FETCHING_USERS_FAILED:
      return {
        ...state,
        userProfile: [],
        fetchingUser: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
