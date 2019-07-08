import React from "react";
import { Button, Avatar, Icon, Card } from "antd";
import propTypes from "prop-types";

const MainPosts = ({ post }) => {
  return (
    <Card
      key={+post.createAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  );
};

MainPosts.propTypes = {
  post: propTypes.shape({
    User: propTypes.object,
    content: propTypes.string,
    img: propTypes.string,
    createAt: propTypes.object
  })
};

export default MainPosts;
