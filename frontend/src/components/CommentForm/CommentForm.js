import React, {useState} from 'react';
import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import FormElement from "../UI/Form/FormElement";

const useStyle = makeStyles({
  root: {
    maxWidth: '600px',
  },
  grid: {
    marginBottom: '20px'
  }
});

const CommentForm = ({onSubmit}) => {
  const classes = useStyle();
  const [comment, setComment] = useState({
    name: '', text: ''
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;

    setComment(prev => ({...prev, [name]: value}));
  };

  return (
      <Grid
        item
        container direction="column"
        component="form"
        onSubmit={onSubmit}
        className={classes.root}
      >
        <Grid item xs className={classes.grid}>
          <FormElement
            label="Name"
            type="text"
            onChange={inputChangeHandler}
            name="name"
            value={comment.name}
          />
        </Grid>
        <Grid item xs className={classes.grid}>
          <TextField
            label="Text"
            type="text"
            multiline
            rows={3}
            onChange={inputChangeHandler}
            name="text"
            value={comment.text}
          />
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" type="submit">Submit post</Button>
        </Grid>
      </Grid>
  );
};

export default CommentForm;