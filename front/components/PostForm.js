import React from "react";
import { Form, Input, Button, Avatar, Icon, Card } from "antd";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);

  return (
    <Form
      style={{ marginTop: "10px", marginBottom: "20px" }}
      enType="multipart/form-data"
    >
      <Input.TextArea maxLength={140} placeholder="뭘말하고싶은건데" />
      <div>
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
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
