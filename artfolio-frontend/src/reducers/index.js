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
  FETCHING_USER_POSTS,
FETCHING_USER_POSTS_SUCCESS,
FETCHING_USER_POSTS_FAILED,
  CREATING_POST,
  CREATING_POST_SUCCESS,
  CREATING_POST_FAILED,
  DELETING_POST,
  DELETING_POST_SUCCESS,
  DELETING_POST_FAILED,
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILED,
  UPDATING_POST_SUCCESSFUL,
} from '../actions';

const initialState = {
  posts: [],
  isLoggedIn: false,
  fetchingPosts: false,
  fetchingUserPosts: false,
  fetchingUser: false,
  loginFailed: false,
  isLoggingIn: false,
  token: null,
  creatingPost: false,
  deletingPost: false,
  userPosts: [],
  error: null,
  userProfile: {
    id: null,
    username: '',
    password: '',
    fullName: '',
    email: '',
    userImgUrl: '',
    posts: [],
  },
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
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: localStorage.token,
        username: localStorage.username,
        id: localStorage.id,
        isLoggedIn: true,
        isLoggingIn: false,
        loginFailed: false,
        user: action.payload,
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

    case FETCHING_USER:
      return {
        ...state,
    
        fetchingUser: true,
        error: null,
      };
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetchingUser: false,
        error: null,
      };
    case FETCHING_USER_FAILED:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload,
      };

    case UPDATING_POST_SUCCESSFUL:
      return {
        ...state,
        postUpdated: action.payload,
        postUpdating: true,
      };

      case FETCHING_USER_POSTS:
      return {
        ...state,
        userPosts: [],
        fetchingUserPosts: true,
        error: null,
      };
    case FETCHING_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
        fetchingUserPosts: false,
        error: null,
      };
    case FETCHING_USER_POSTS_FAILED:
      return {
        ...state,
        userPosts: [],
        fetchingUserPosts: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
