import { useEffect } from "react";
import PostForm from "../components/PostForm";
import MainPosts from "../components/MainPosts";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch(); // 바로 디스패치 쓸수있다, connect 필요없다

  // const { user } = useSelector(state => state.user.user); // state는 전체 state 의미
  const { isLoggedIn } = useSelector(state => state.user.isLoggedIn);
  const { mainPosts } = useSelector(state => state.post);

  // 여러번써서 잘게쪼게는게 리랜더링 예방

  useEffect(() => {
    dispatch({
      type: "HELLO_SAGA"
    }); // 액션을 바로 스토어에 전달
    dispatch({
      type: "HELLO_SAGA"
    }); // 액션을 바로 스토어에 전달
    dispatch({
      type: "HELLO_SAGA"
    }); // 액션을 바로 스토어에 전달
  }, []); // useeffect는 componentdidmount 랑같음

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(post => {
        return <MainPosts key={post} post={post} />;
      })}
    </div>
  );
};

export default Home;
