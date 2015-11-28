import { FETCH_PROPERTY_SUCCESS, 
  ADD_PROPERTY_REQUEST,
  REMOVE_PROPERTY_REQUEST } from 'constants';

export default function saved(state=[], action) {
  switch (action.type) {
    case FETCH_PROPERTY_SUCCESS:
      return action.body.saved;
    case ADD_PROPERTY_REQUEST:
      if (state.filter(property => property.id === action.property.id).length === 0) {
        return [...state, action.property];
      }
      return state;
    case REMOVE_PROPERTY_REQUEST:
      return [...state.slice(0, action.index),
      ...state.slice(action.index + 1)];
    default:
      return state;
  }
};