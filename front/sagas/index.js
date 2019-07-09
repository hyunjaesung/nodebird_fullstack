import { all, call } from "redux-saga/effects";
import user from "./user";
import post from "./post";

export default function* rootSaga() {
  yield all([call(user), call(post)]);
}

// 사가를 합치기
// 리듀서랑 유사
