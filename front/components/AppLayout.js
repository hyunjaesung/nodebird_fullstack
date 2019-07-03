import React from "react";
import { Menu, Input } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        {/* 가로모드 */}
        <Menu.Item key="home">노드버드</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
          {/* 가운데정렬 */}
        </Menu.Item>
      </Menu>
      {children}
      {/* props에서 children도 가져와야된다 */}
    </div>
  );
};

export default AppLayout;
