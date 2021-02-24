import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import diceReducer from './store/reducers';

// const store = createStore(diceReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}></Provider> */}
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
