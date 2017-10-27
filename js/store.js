// @flow

import { createStore, compose, applyMiddleware } from 'redux'; // add applyMiddleware
import { createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import rootReducer from './reducers';
import rootEpic from './epics';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(createEpicMiddleware(rootEpic, { dependencies: Observable })), // middleware
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
