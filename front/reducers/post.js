const initState = {
  mainPosts: []
};

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST
};

// 액션에도 저장원하는 작은단위 데이터 구조만들어준다

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "스티브"
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state
      };
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [...state.mainPosts, ...action.data]
        // spread문법을 써서 새로운 객체를 만들어야 참조가 달라지고 불변성이 생겨서 state 변화를 알수있음
        // spread를 남발하면 코드 가독성이 떨어지기때문에 immer.js같은 걸이용한다
      };

    default:
      return state;
  }
};

export default reducer;
