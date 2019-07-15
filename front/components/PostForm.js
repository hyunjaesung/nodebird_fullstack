import React, { useCallback, useState, useEffect } from "react";
import { Form, Input, Button, Avatar, Icon, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { imagePaths, isAddingPost, postAdded } = useSelector(
    state => state.post
  );

  useEffect(() => {
    setText("");
  }, [postAdded === true]); // true 가되면 써있던 글을지워줌

  const onSubmit = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text
      }
    });
  }, []);

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <Form
      style={{ marginTop: "10px", marginBottom: "20px" }}
      enType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="뭘말하고싶은건데"
        value={text}
        onChange={onChangeText}
      />
      <div>
        <Button>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          isLoading={isAddingPost}
        >
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths &&
          imagePaths.map((v, i) => {
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
  );
};

export default PostForm;
