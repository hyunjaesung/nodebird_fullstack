import React from "react";
import { List, Button, Card, Icon } from "antd";

const FollowList = ({ header }) => {
  return (
    <List
      style={{ marginBottom: "20px" }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{`${header}`}</div>}
      loadMore={<Button style={{ width: "100%" }}>더보기</Button>}
      bordered
      dataSource={["스티브", "바보", "노드버드"]}
      renderItem={item => (
        <List.Item style={{ marginTop: "20px" }}>
          <Card actions={[<Icon type="stop" />]}>
            <Card.Meta description={item} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowList;
