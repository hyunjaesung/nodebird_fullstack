const initState = {
  id: 1,
  mainPosts: [
    {
      id: 1,
      User: { nickname: "steve", id: 1 },
      content: "첫번째게시글",
      img:
        "https://cdn.designbyhumans.com/product_images/p/898810.f56.f949aS7ay1Cm2MjUAAA-650x650-b-p.jpg",
      Comments: []
    }
  ], // 화면에 보일 포스트
  imagePaths: [], // 미리보기 이미지 경로
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  isAddingComment: false,
  addCommentErrorReason: "",
  commentAdded: false
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "스티브"
  },
  content: "나는 더미에용",
  Comments: []
};

const dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: "스티브"
  },
  createdAt: new Date(),
  content: "더미댓글입니다"
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
  type: ADD_POST_REQUEST
};

// 액션에도 저장원하는 작은단위 데이터 구조만들어준다

// export const addDummy = {
//   type: ADD_DUMMY,
//   data: {
//     content: "Hello",
//     UserId: 1,
//     User: {
//       nickname: "스티브"
//     }
//   }
// };

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isAddingPost: true,
        addPostErrorReason: "",
        postAdded: false
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [...state.mainPosts, dummyPost],
        postAdded: true
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isAddingPost: false,
        addPostErrorReason: action.error
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: "",
        commentAdded: false
      };
    }
    case ADD_COMMENT_SUCCESS: {
      // 게시글이 여러개 있는데 거기에 껴서넣어줘야함
      // 불변성을 지키면서 넣어줘야함
      // 이리 길게 해서 지겨운짓을 안하려면 immer 를 씀
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      // 코멘트들 새로 만들어서 새 포스트만든곳에 넣어서 넣어주기
      console.log(mainPosts);
      return {
        ...state,
        isAddingComment: false,
        mainPosts,
        commentAdded: true
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        addCommentErrorReason: action.error
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
