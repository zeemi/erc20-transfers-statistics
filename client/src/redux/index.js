import {combineReducers} from 'redux';
import tokens from './tokens';
import {RESET_ALL} from "./tokens/action";

const appReducer = combineReducers({
  tokens
});

const rootReducer = (state, action) => {
  if (action.type === RESET_ALL) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
