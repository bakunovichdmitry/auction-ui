import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import loggingMiddleware from './middleware/logging';

const configureStore = (initialState) => {
  const middleware =  composeWithDevTools(
    applyMiddleware(thunk, loggingMiddleware)
  );

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
