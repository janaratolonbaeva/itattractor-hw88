import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';

const getPostsRequest = () => ({type: GET_POSTS_REQUEST});
const getPostsSuccess = posts => ({type: GET_POSTS_SUCCESS, posts});
const getPostsFailure = error => ({type: GET_POSTS_FAILURE, error});
const postPostSuccess = () => ({type: POST_POST_SUCCESS});

export const fetchPosts = () => {
  return async dispatch => {
    try {
      dispatch(getPostsRequest());
      const response = await axiosApi.get('/posts');
      dispatch(getPostsSuccess(response.data));
    } catch (e) {
      dispatch(getPostsFailure(e));
    }
  }
};

export const postOnePost = (post) => {
  return async (dispatch, getState) => {
    const token = getState().users.user.token;
    const headers = {Authorization: token}

    await axiosApi.post('/posts', post, {headers});

    dispatch(postPostSuccess());
    dispatch(historyPush('/'));
  }
}


