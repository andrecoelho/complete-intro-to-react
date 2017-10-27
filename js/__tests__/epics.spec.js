// @flow

import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toArray';

import { getAPIDetails, addAPIData } from '../actionCreators';
import { fetchAPIDetails } from '../epics';

const oitnb = {
  rating: '0.8',
  title: 'Orange Is the New Black',
  year: '2013–',
  description: 'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.',
  poster: 'oitnb.jpg',
  imdbID: 'tt2372162',
  trailer: 'th8WT_pxGqg'
};

const actionStream = ActionsObservable.of(getAPIDetails(oitnb.imdbID));
const outputStream = fetchAPIDetails(actionStream, {}, Observable);

test('fetchAPIDetails', () => {
  Observable.ajax = {
    getJSON: () => Observable.of(oitnb)
  };

  outputStream.toArray().subscribe(actions => {
    expect(actions.length).toBe(1);
    expect(actions[0]).toEqual(addAPIData(oitnb));
  });
});

test('fetchAPIDetails Error', () => {
  Observable.ajax = {
    getJSON: () => Observable.throw()
  };

  outputStream.toArray().subscribe(actions => expect(actions.length).toBe(0));
});
