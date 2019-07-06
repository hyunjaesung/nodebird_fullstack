import PostForm from "../components/PostForm";
import MainPosts from "../components/MainPosts";

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
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(post => {
        return <MainPosts key={post} post={post} />;
      })}
    </div>
  );
};

export default Home;
