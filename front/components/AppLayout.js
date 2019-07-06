import React from "react";
import { Menu, Input, Button, Row, Col, Avatar, Card } from "antd";
import Link from "next/link";
import propTypes from "prop-types";

const dummy = {
  nickname: "스티브",
  Post: [],
  Followings: [],
  Followers: []
};
// 실무에서 프론트개발이 더빠를때는 더미데이터를 만들고 받을거 예상해서 객체를 만들어준다

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

      <Row>
        {/* xs는 모바일 sm은 작은화면 md는 중간화면 lg는 큰화면*/}
        {/* 24등분함, 24는 좌우로 통째로 12면 절반 */}
        {/* 섞어쓰는것 따라 반응형이 된다 */}
        <Col xs={24} md={12}>
          <Card
            actions={[
              <div key="twit">
                짹짹 <br />
                {dummy.Post.length}
              </div>,
              <div key="following">
                팔로윙 <br />
                {dummy.Followings.length}
              </div>,
              <div key="follower">
                팔로워 <br />
                {dummy.Followers.length}
              </div>
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
              // 앞글자
              title={dummy.nickname}
            />
          </Card>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          세번째
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node
};

export default AppLayout;
