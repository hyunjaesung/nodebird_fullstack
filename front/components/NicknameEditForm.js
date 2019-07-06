import React from "react";
import { Form, Input, Button } from "antd";
const NicknameEditForm = () => {
  return (
    <Form style={{ marginBottom: "20px" }}>
      <Input
        style={{ marginTop: "10px", marginBottom: "10px" }}
        addonBefore="닉네임"
      />
      <Button type="primary">수정</Button>
    </Form>
  );
};

export default NicknameEditForm;
