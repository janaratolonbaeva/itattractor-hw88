import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./container/Home/Home";
import NewPost from "./container/NewPost/NewPost";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import Layout from "./components/UI/Layout/Layout";
import OnePost from "./container/OnePost/OnePost";

const App = () => (
  <>
    <CssBaseline/>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/posts/:id" component={OnePost} />
      </Switch>
    </Layout>
  </>
);

export default App;
