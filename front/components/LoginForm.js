import React, { useState, useCallback } from "react";
import { Input, Button, Form } from "antd";
import Link from "next/link";
import { useInput } from "../components/SignupForm";

import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");

  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch(loginAction);
    },
    [id, password]
  );

  return (
    <Form style={{ margin: "10px" }} onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" onChange={onChangeId} value={id} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          onChange={onChangePassword}
          value={password}
          type="password"
          required
        />
      </div>
      <div>
        <Button
          style={{ marginTop: "10px" }}
          type="primary"
          htmlType="submit"
          loading={false}
        >
          {/* 여기에 loading true 주면 바로 빙글빙글돔 간편한 엔트디 장점 */}
          로그인
        </Button>
      </div>
      <Link href="/signup">
        <a>
          <Button style={{ marginTop: "5px" }}>회원가입</Button>
        </a>
      </Link>
    </Form>
  );
};

export default LoginForm;
