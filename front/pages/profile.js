import React from "react";
import { Form, Input, List, Button, Card, Icon } from "antd";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <FollowList header="팔로윙 목록" />
      <FollowList header="팔로워 목록" />
    </div>
  );
};

export default Profile;
