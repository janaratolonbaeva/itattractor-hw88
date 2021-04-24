import {GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, POST_POST_SUCCESS} from "../actions/postsActions";

const initialState = {
  posts: null,
  postsLoading: false,
  postsError: null,
};

const PostsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {...state, postsLoading: true};
    case GET_POSTS_SUCCESS:
      return {...state, postsLoading: false, posts: action.posts};
    case GET_POSTS_FAILURE:
      return {...state, postsLoading: false, postsError: action.error};
    case POST_POST_SUCCESS:
      return {...state}
    default:
      return state;
  }
}

export default PostsReducers;