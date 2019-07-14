import {
  all,
  fork,
  takeLatest,
  takeEvery,
  call,
  put,
  take
} from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios";

function loginAPI() {
  return axios.post("/login");
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
  takeLatest(LOG_IN_REQUEST, login);
}

function signUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post("/signup");
}

function* signUp() {
  try {
    // yield call(signUpAPI);

    yield put({
      // put은 dispatch 동일
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

// all은 여러 이펙트를 동시 실행가능케함
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
  // 괄호 위치 유의!!
  // 리스너 여러개 쓰고싶으면 all을 씀
  // all은 여러 이펙트를 동시 실행가능케함
}
