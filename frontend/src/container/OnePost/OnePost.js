import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import CommentForm from "../../components/CommentForm/CommentForm";
import {useDispatch} from "react-redux";

const useStyle = makeStyles(theme => ({
  imgWrapper: {
    minWidth: '200px',
    minHeight: '200px'
  },
  grid: {
    marginBottom: theme.spacing(4)
  },
  strong: {
    fontSize: '20px'
  }
}));

const OnePost = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const submitFormHandler = e => {
    e.preventDefault();

    console.log('submit');
  }

  return (
    <>
      <Grid container direction="column">
        <Grid item className={classes.grid}>
          <Typography variant="h4">Title</Typography>
        </Grid>
        <Grid container item direction="row" className={classes.grid}>
          <Grid item xs={4}>
            <div className={classes.imgWrapper}>
              <img scr="text" />
            </div>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.grid}>
              date by
              <strong className={classes.strong}> John</strong>
            </Typography>
            <Typography>Lorem ipsum</Typography>
          </Grid>
        </Grid>
        <CommentForm onSubmit={submitFormHandler} />
      </Grid>
    </>
  );
};

export default OnePost;