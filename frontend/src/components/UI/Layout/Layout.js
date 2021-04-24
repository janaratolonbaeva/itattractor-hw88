import React from 'react';
import {makeStyles} from "@material-ui/core";
import {NotificationContainer} from "react-notifications";
import Container from "@material-ui/core/Container";
import AppToolbar from "../AppToolbar/AppToolbar";
import 'react-notifications/lib/notifications.css';

const useStyle = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(8),
    position: 'relative'
  }
}));

const Layout = (props) => {
  const classes = useStyle();

  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <NotificationContainer/>
          {props.children}
        </Container>
      </main>
    </>
  );
};

export default Layout;