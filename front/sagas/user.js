import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

function loginAPI() {
  // 서버에 요청 보내기
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      // put 은 dispatch와 동일
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    // 실패시
    console.error(e);
    yield put({
      // put 은 dispatch와 동일
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);

  //여기서 takeLatest가 LOG_IN 액션이 dispatch 되는걸 기다려서
  // dispatch될때 login 제너레이터를 호출한다
  // 일종의 액션리스너
}

const HELLO_SAGA = "HELLO_SAGA";

function* helloSaga() {
  console.log("beforeSaga");
  while (true) {
    yield take(HELLO_SAGA);
    console.log("hellosaga");
  }
}

export default function* userSaga() {
  yield all([fork(watchLogin), helloSaga()]); // 제너레이터 실행
}
