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

export const loginAction = {
  type: LOG_IN
  // data: {
  //   nickname: "스티브"
  // }
};

export const logoutAction = {
  type: LOG_OUT
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

    default:
      return state;
  }
};

export default reducer;
