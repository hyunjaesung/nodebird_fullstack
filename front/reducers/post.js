const initState = {
  imagePaths: [], // 미리보기 이미지 경로
  mainPosts: [
    {
      User: { nickname: "steve", id: 1 },
      content: "첫번째게시글",
      img:
        "https://cdn.designbyhumans.com/product_images/p/898810.f56.f949aS7ay1Cm2MjUAAA-650x650-b-p.jpg"
    }
  ], // 화면에 보일 포스트
  addPostErrorReason: false, // 포스트 업로드 실패사유
  isAddingPost: false // 포스트 업로드중
};

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const LOAD_IMAGES_REQUEST = "LOAD_IMAGES_REQUEST";
export const LOAD_IMAGES_SUCCESS = "LOAD_IMAGES_SUCCESS";
export const LOAD_IMAGES_FAILURE = "LOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENT_REQUEST = "LOAD_COMMENT_REQUEST";
export const LOAD_COMMENT_SUCCESS = "LOAD_COMMENT_SUCCESS";
export const LOAD_COMMENT_FAILURE = "LOAD_COMMENT_FAILURE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

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
