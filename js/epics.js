// @flow

import { combineEpics } from 'redux-observable';

import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/empty';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { GET_API_DETAILS } from './actions';
import { addAPIData } from './actionCreators';

export const fetchAPIDetails = (actionStream, store, Observable) =>
  actionStream
    .ofType(GET_API_DETAILS)
    .switchMap(action =>
      Observable.ajax
        .getJSON(`http://localhost:3000/${action.payload}`)
        .map(addAPIData)
        .catch(() => Observable.empty())
    );

export default combineEpics(fetchAPIDetails);
