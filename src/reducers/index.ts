import {combineReducers} from 'redux';
import user from './user';

export const USER_LOGOUT = "USER_LOGOUT"
export const userLogOut = () => ({
  type: USER_LOGOUT,
});

const appReducer = combineReducers({
  user,
  //여기에 memo도 곧 추가하기!
})

const rootReducer = (state:any, action:any) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer