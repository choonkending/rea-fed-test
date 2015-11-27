import { ADD_PROPERTY_REQUEST, 
  ADD_PROPERTY_SUCCESS, 
  ADD_PROPERTY_FAILURE } from '../constants';

function addPropertyRequest(id) {
  return {
    type: ADD_PROPERTY_REQUEST,
    id
  };
}

function addPropertySuccess(id) {
  return {
    type: ADD_PROPERTY_SUCCESS,
    id
  };
}

function addPropertyFailure(id) {
  return {
    type: ADD_PROPERTY_FAILURE,
    id
  };
}

export function addProperty(id) {
  
  addPropertyRequest(id);

  /*
   * This is where you'd make the API request
   * and return a promise that calls 
   * addPropertySuccess if it is successfull, or
   * addPropertyFailure if it failed
   */

};
