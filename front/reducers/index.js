import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// 이렇게 하나로 묶어준다
const rootReducer = combineReducers({
  user,
  post
});

export default rootReducer;
