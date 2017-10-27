// @flow

import { SET_SEARCH_TERM, GET_API_DETAILS, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(imdbID: string) {
  return {
    type: GET_API_DETAILS,
    payload: imdbID
  };
}
