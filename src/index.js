import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'


const initialState = {
  operacionesReducer: {valor: 0},
  loginReducer: {
    loginData: {},
    profile: {},
    accessToken: {},
    isLogged: false
  }
}


const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
