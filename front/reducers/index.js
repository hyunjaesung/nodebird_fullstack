import { combineReducers } from "redux";
import userReducer from "./user";
import postReducer from "./post";

// 이렇게 하나로 묶어준다
const rootReducer = combineReducers({
  userReducer,
  postReducer
});

export default rootReducer;
