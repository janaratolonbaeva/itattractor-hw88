import React from 'react';
import {Link} from "react-router-dom";
import {Button, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  text: {
    marginRight: '20px',
    verticalAlign: 'middle'
  },
  strong: {
    textTransform: 'uppercase'
  }
});

const UserMenu = ({user}) => {
  const classes = useStyle();

  return (
    <>
      <span className={classes.text}>Hello <strong className={classes.strong}>{user}</strong>!</span>
      <Button component={Link} to="/new-post" color="inherit">Add new post</Button>
      <Button component={Link} to="/logout" color="inherit">Logout</Button>
    </>
  );
};

export default UserMenu;