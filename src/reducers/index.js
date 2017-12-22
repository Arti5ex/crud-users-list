import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';

import user from "./userReducer";
export default combineReducers({
  user,
  form: reduxFormReducer
});