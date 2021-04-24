import React, {useState} from 'react';
import {Avatar, Container, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormElement from "../../components/UI/Form/FormElement";
import {Link as RouterLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/actions/usersActions";
import {Alert, AlertTitle} from "@material-ui/lab";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  header: {
    marginBottom: theme.spacing(2)
  }
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '', password: ''
  });
  const error = useSelector(state => state.users.loginError);
  const loading = useSelector(state => state.users.loginLoading);

  const inputChangeHandler = e => {
    const {name, value} = e.target;

    setUser(prev => ({...prev, [name]: value}));
  };

  const submitFormHandler = e => {
    e.preventDefault();

    dispatch(loginUser({...user}));
  };

  return (
    <Container component="section" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Sign in
        </Typography>
        <Grid container spacing={1} direction="column" component="form" onSubmit={submitFormHandler}>
          {error && (
            <Grid item xs>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error.message || error.global}
              </Alert>
            </Grid>
          )}
          <FormElement
            label="Username"
            type="text"
            onChange={inputChangeHandler}
            name="username"
            value={user.username}
          />
          <FormElement
            label="Password"
            type="password"
            onChange={inputChangeHandler}
            name="password"
            value={user.password}
          />
          <Grid item xs>
            <ButtonWithProgress
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              loading={loading}
              disabled={loading}
            >
              Sign in
            </ButtonWithProgress>
          </Grid>
          <Grid item container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} variant="body2" to="/register">
                Or sign up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;