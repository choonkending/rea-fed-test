import { combineReducers } from 'redux';
import mainUI from 'reducers/mainUI';
import results from 'reducers/results';
import savedProperty from 'reducers/savedProperty';

const rootReducer = combineReducers({
  mainUI,
  results,
  savedProperty
});

export default rootReducer;
