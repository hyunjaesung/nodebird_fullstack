import { useEffect } from "react";
import PostForm from "../components/PostForm";
import MainPosts from "../components/MainPosts";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/user";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: { nickname: "steve", id: 1 },
      content: "첫번째게시글",
      img:
        "https://cdn.designbyhumans.com/product_images/p/898810.f56.f949aS7ay1Cm2MjUAAA-650x650-b-p.jpg"
    }
  ]
};

const Home = () => {
  const dispatch = useDispatch(); // 바로 디스패치 쓸수있다, connect 필요없다

  const { user, isLoggedIn } = useSelector(state => state.user); // state는 전체 state 의미

  console.log(user);

  useEffect(() => {
    dispatch(loginAction); // 액션을 바로 스토어에 전달
  }, []); // useeffect는 componentdidmount 랑같음

  return (
    <div>
      {user ? (
        <div>{`${user.nickname} 로그인 했습니다`}</div>
      ) : (
        <div>로그아웃했습니다</div>
      )}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(post => {
        return <MainPosts key={post} post={post} />;
      })}
    </div>
  );
};

export default Home;
