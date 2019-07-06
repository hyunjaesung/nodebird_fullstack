import React from "react";
import { Menu, Input, Button } from "antd";
import Link from "next/link";
import propTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        {/* 가로모드 */}
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
          {/* 가운데정렬 */}
        </Menu.Item>
      </Menu>
      <Link href="/signup">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node
};

export default AppLayout;
