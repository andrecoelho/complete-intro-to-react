// @flow

import { setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators';

const oitnb = {
  rating: '0.8',
  title: 'Orange Is the New Black',
  year: '2013–',
  description: 'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.',
  poster: 'oitnb.jpg',
  imdbID: 'tt2372162',
  trailer: 'th8WT_pxGqg'
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(oitnb)).toMatchSnapshot();
});

test('getAPIDetails', () => {
  expect(getAPIDetails(oitnb.imdbID)).toMatchSnapshot();
});
