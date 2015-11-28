import { FETCH_PROPERTY_SUCCESS, 
  ADD_PROPERTY_REQUEST } from '../constants';

export default function results(state=[], action) {
  switch (action.type) {
    case FETCH_PROPERTY_SUCCESS:
      return action.body.results;
    default:
      return state;
  }
};