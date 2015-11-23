import { PROPERTY_REQUEST, 
  PROPERTY_SUCCESS, 
  PROPERTY_FAILURE } from 'constants';

export default function propertyApp(state={
  isFetching: false,
  didInvalidate: false,
  results: [],
  savedProperty: []
}, action) {
  switch(action.type) {
    case PROPERTY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case PROPERTY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        results: data.results,
        savedProperty: data.saved
      });
    case PROPERTY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true
      });

    default:
      return state;
  }
}