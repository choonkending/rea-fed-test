import { REMOVE_PROPERTY_REQUEST, 
  REMOVE_PROPERTY_SUCCESS, 
  REMOVE_PROPERTY_FAILURE } from '../constants';

function removePropertyRequest(index) {
  return {
    type: REMOVE_PROPERTY_REQUEST,
    index
  };
}

function removePropertySuccess(index) {
  return {
    type: REMOVE_PROPERTY_SUCCESS,
    index
  };
}

function removePropertyFailure(index) {
  return {
    type: REMOVE_PROPERTY_FAILURE,
    index
  };
}

export function removeSavedProperty(index) {
  // For the scope of this test, we do not need
  // to use the dispatch method as a function
  // However, in a real world application, 
  // making any changes to saved list should be
  // synced
  return dispatch => {
    dispatch(removePropertyRequest(index));
    /*
     * This is where you'd make the API request
     * and return a promise that calls 
     * removePropertySuccess if it is successfull, or
     * removePropertyFailure if it failed
     */
  };
};
