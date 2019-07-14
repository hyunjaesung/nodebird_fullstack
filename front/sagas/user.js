import {
  all,
  fork,
  takeLatest,
  takeEvery,
  call,
  put,
  take
} from "redux-saga/effects";
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

// function* watchLogin() {
//   yield takeLatest(LOG_IN, login);

//   //여기서 takeLatest가 LOG_IN 액션이 dispatch 되는걸 기다려서
//   // dispatch될때 login 제너레이터를 호출한다
//   // 일종의 액션리스너
// }

// const HELLO_SAGA = "HELLO_SAGA";

// function* watchHello() {
//   console.log("beforeSaga");
//   while (true) {
//     yield take(HELLO_SAGA);
//     console.log("hellosaga");
//   }
// }

function* watchLogin() {
  takeLatest(LOG_IN, login);
}

function* watchSignUp() {}

// all은 여러 이펙트를 동시 실행가능케함
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
  // 괄호 위치 유의!!
  // 리스너 여러개 쓰고싶으면 all을 씀
  // all은 여러 이펙트를 동시 실행가능케함
}
