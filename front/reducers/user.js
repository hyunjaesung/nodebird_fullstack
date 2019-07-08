const dummyUser = {
  nickname: "스티브",
  Post: [],
  Followings: [],
  Followers: []
};

const initState = {
  isLoggedIn: false,
  user: null
};

// 액션

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";

export const loginAction = {
  type: LOG_IN
};

export const logoutAction = {
  type: LOG_OUT
};

export const signupAction = data => {
  return {
    type: SIGN_UP,
    data // 동적데이터가 들어감
  };
};

// 리듀서

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser // 원래는 action.data
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }

    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data
      };
    }

    default:
      return state;
  }
};

export default reducer;
