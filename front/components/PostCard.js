import React, { useState, useCallback, useEffect } from "react";
import { Button, Avatar, Icon, Card, Input, Comment, List, Form } from "antd";
import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const MainPosts = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { me } = useSelector(state => state.user);
  const { commentAdded, isLoadingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(
    () => setCommentFormOpened(prev => !prev),
    []
  );

  const onSubmitComment = useCallback(
    e => {
      e.preventDefault();
      if (!me) {
        return alert("로그인이 필요합니다");
      }
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          postId: post.id
        }
      });
    },
    [me && me.id] // 의존성 잘넣어줘야된다 안그러면 계속 useCallback이 null인걸로 기억함
  );

  useEffect(() => {
    setCommentText("");
  }, [commentAdded === true]);

  const onChangeCommentText = useCallback(e => {
    setCommentText(e.target.value);
  }, []);

  return (
    <div>
      <Card
        key={+post.createAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <Icon type="retweet" key="retweet" />,
          <Icon type="heart" key="heart" />,
          <Icon type="message" key="message" onClick={onToggleComment} />,
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

      {commentFormOpened && (
        <>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea
                rows={4}
                value={commentText}
                onChange={onChangeCommentText}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoadingComment}>
              삐약
            </Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                  datetime={item.createAt}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
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
