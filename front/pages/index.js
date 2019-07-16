import { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/user";

const Home = () => {
  // const { user } = useSelector(state => state.user.user); // state는 전체 state 의미
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  // 여러번써서 잘게쪼게는게 리랜더링 예방

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(post => {
        return <PostCard key={post} post={post} />;
      })}
    </div>
  );
};

export default Home;
