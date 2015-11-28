import { ADD_PROPERTY_REQUEST, 
  ADD_PROPERTY_SUCCESS, 
  ADD_PROPERTY_FAILURE } from '../constants';

function addPropertyRequest(property) {
  return {
    type: ADD_PROPERTY_REQUEST,
    property
  };
}

function addPropertySuccess(property) {
  return {
    type: ADD_PROPERTY_SUCCESS,
    property
  };
}

function addPropertyFailure(property) {
  return {
    type: ADD_PROPERTY_FAILURE,
    property
  };
}

export function addProperty(property) {
  return dispatch => {
    dispatch(addPropertyRequest(property));
    /*
     * This is where you'd make the API request
     * and return a promise that calls 
     * addPropertySuccess if it is successfull, or
     * addPropertyFailure if it failed
     */
  };
};
