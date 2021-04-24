import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";
import PostForm from "../../components/PostForm/PostForm";
import {postOnePost} from "../../store/actions/postsActions";

const NewPost = ({history}) => {
  const dispatch = useDispatch();

  const onPostFormSubmit = async postData => {

    await dispatch(postOnePost(postData));
    history.push('/');
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <Typography variant="h4">New product</Typography>
      </Grid>
      <Grid item xs>
        <PostForm onSubmit={onPostFormSubmit}/>
      </Grid>
    </Grid>
  );
};

export default NewPost;