import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { FETCH_PROPERTY_REQUEST, 
  FETCH_PROPERTY_SUCCESS, 
  FETCH_PROPERTY_FAILURE } from '../constants';

// isomorphic-fetch requires an es6-polyfill
promise.polyfill();

const API_ENDPOINT = '/property';

export function fetchPropertyRequest() {
  return {
    type: FETCH_PROPERTY_REQUEST,
    isLoading: true
  };
}

/*
 * @param {JSON Object} contains a results Array and saved Array
 */
export function fetchPropertySuccess(body) {
  return {
    type: FETCH_PROPERTY_SUCCESS,
    body
  };
}

/*
 * @param {String} error message from server
 */
function fetchPropertyFailure(error) {
  return {
    type: FETCH_PROPERTY_FAILURE,
    error
  };
}

// Allow nock testing to override because nock
// does not allow absolute URLS
export function loadPropertyData(api=API_ENDPOINT) {
  return dispatch => {
    // First dispatch the request so inform
    // the user we are loading
    dispatch(fetchPropertyRequest());

    return fetch(api)
      .then(response => {
        if (response.status >= 400) throw new Error("Oops! Something went wrong with our servers.");
        return response.json();
      })
      .then(json => dispatch(fetchPropertySuccess(json)))
      .catch(err =>dispatch(fetchPropertyFailure(err)));

  };
}

