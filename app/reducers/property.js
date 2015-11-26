import { FETCH_PROPERTY_REQUEST, 
  FETCH_PROPERTY_SUCCESS, 
  FETCH_PROPERTY_FAILURE } from 'constants';

export default function propertyApp(state={
  isFetching: false,
  didInvalidate: false,
  results: [],
  savedProperty: []
}, action) {
  switch(action.type) {
    case FETCH_PROPERTY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case FETCH_PROPERTY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        results: action.body.results,
        savedProperty: action.body.saved
      });
    case FETCH_PROPERTY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true
      });

    default:
      return state;
  }
}