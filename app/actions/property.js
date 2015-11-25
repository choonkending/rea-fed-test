import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { PROPERTY_REQUEST, 
  PROPERTY_SUCCESS, 
  PROPERTY_FAILURE } from 'constants';

// isomorphic-fetch requires an es6-polyfill
promise.polyfill();

// absolute for nock tests
const API_ENDPOINT = 'http://localhost:3000/property'

export function fetchPropertyRequest() {
  return {
    type: PROPERTY_REQUEST,
    isLoading: true
  };
}

/*
 * @param {JSON Object} contains a results Array and saved Array
 */
export function fetchPropertySuccess(body) {
  return {
    type: PROPERTY_SUCCESS,
    body
  };
}

/*
 * @param {String} error message from server
 */
function fetchPropertyFailure(error) {
  return {
    type: PROPERTY_FAILURE,
    error
  };
}

export function loadPropertyData() {
  return dispatch => {
    // First dispatch the request so inform
    // the user we are loading
    dispatch(fetchPropertyRequest());

    return fetch(API_ENDPOINT)
      .then(response=> {
        if (response.status >= 400) throw new Error("Oops! Something went wrong with our servers.");
        return response.json();
      })
      .then(json=> dispatch(fetchPropertySuccess(json)))
      .catch(err=>dispatch(fetchPropertyFailure(err)));

  };
}



