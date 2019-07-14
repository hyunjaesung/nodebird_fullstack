import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch } from "react-redux";
import { signupRequestAction } from "../reducers/user";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const SignupForm = () => {
  const dispatch = useDispatch();

  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [TermError, setTermError] = useState(false);

  // 자식컴포넌트에 props 로 넘기는 함수들은 useCallback으로 감싸줘야한다
  // state가 바뀔때마다 통째로 바뀌고 함수가 새로생성, 기존의 오브젝트와 다른 오브젝트가 되버리고 -> 의도치않은 리렌더링 발생

  const [nick, onChangeNick] = useInput("");
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      dispatch(signupRequestAction({ id, password, nick }));
      // console.log({ id, nick, password, passwordCheck, term });
    },
    [password, passwordCheck, term]
  );
  // useCallback을 쓰려면 dependecny 에 이용하는 state값들 다넣어줘야함
  // 기억력 높아져서 state바뀔때 이벤트리스너 함수 다시 생성 가능

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password); // 비밀번호체크
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false); // 약관동의 체크
    setTerm(e.target.checked); // 체크박스는 이걸로
  }, []);
  return (
    <>
      <Form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다!! </div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            동의합니까
          </Checkbox>
          {TermError && (
            <div style={{ color: "red" }}>약관에 동의하세요!! </div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignupForm;
