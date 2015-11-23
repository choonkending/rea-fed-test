import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

import { PROPERTY_REQUEST, 
  PROPERTY_SUCCESS, 
  PROPERTY_FAILURE } from 'constants';
// isomorphic-fetch requires an es6-polyfill
promise.polyfill();

function fetchPropertyRequest() {
  return {
    type: PROPERTY_REQUEST,
    isLoading: true
  };
}

/*
 * @param {JSON Object} contains a results Array and saved Array
 */
function fetchPropertySuccess(data) {
  return {
    type: PROPERTY_SUCCESS,
    data: data
  };
}

/*
 * @param {String} error message from server
 */
function fetchPropertyFailure(error) {
  return {
    type: PROPERTY_FAILURE,
    error: error
  };
}

export function loadPropertyData() {
  return dispatch => {
    // First dispatch the request so inform
    // the user we are loading
    dispatch(fetchPropertyRequest());

    return fetch('/property')
      .then(response=> {
        if (response.status >= 400) throw new Error("Oops! Something went wrong with our servers.");
        return response.json();
      })
      .then(json=>dispatch(fetchPropertySuccess(json)))
      .catch(err=>dispatch(fetchPropertyFailure(err)));

  };
}



