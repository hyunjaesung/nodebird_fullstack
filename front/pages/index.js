import { Form, Input, Button, Avatar, Icon, Card } from "antd";

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
      {dummy.isLoggedIn && (
        <Form style={{ marginBottom: 20 }} enType="multipart/form-data">
          <Input.TextArea maxLength={140} placeholder="뭘말하고싶은건데" />
          <div>
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              짹짹
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => {
              return (
                <div key={v} style={{ display: "inline-block" }}>
                  <img
                    src={`https://localhost:3000/${v}`}
                    style={{ width: "200px" }}
                    alt={v}
                  />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
      {dummy.mainPosts.map(c => {
        return (
          <Card
            key={+c.createAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
