import { combineReducers } from 'redux';
import mainUI from 'reducers/mainUI';
import results from 'reducers/results';
import savedProperties from 'reducers/savedProperties';

const rootReducer = combineReducers({
  mainUI,
  results,
  savedProperties
});

export default rootReducer;
