import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import App from './App';
import usersReducers from "./store/reducers/usersReducers";
import postsReducers from "./store/reducers/postsReducers";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('forumState', serializedState);
  } catch (e) {
    console.log('Could not save state');
  }
};

const loadFromToLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('forumState');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState)
  } catch (e) {
    return undefined;
  }
};

const rootReducer = combineReducers({
  users: usersReducers,
  posts: postsReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromToLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  saveToLocalStorage({
    users: store.getState().users
  });
});

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    }
  }
});

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


