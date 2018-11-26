import { combineReducers } from "redux";
import cardReducer from './cardReducer';
import navigationReducer from './navigationReducer';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';

// Combine all the reducers
export default combineReducers({
  cardReducer,
  navigationReducer,
  chatReducer,
  profileReducer
});
