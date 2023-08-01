import React from "react";
import profilePIC from "../../assets/profilePIC.png";
import styled from "styled-components";
import UserCoinValue from "./UserCoinValue";
import { AiFillCheckCircle } from "react-icons/ai";
import ChooseMenu from "./ChooseMenu";
import Example from "../Test";

const Img = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;
const NickName = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-top: 4px;
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Profile = ({
  profilePIC,
  nickname,
  coinValueBtn = true,
  chooseMenuBtn = false,
  postId,
}) => {
  return (
    <Wrapper>
      <div>
        <Img src={profilePIC}></Img>

        <NickName>{nickname}</NickName>
      </div>

      {coinValueBtn === true ? (
        <UserCoinValue value={0.001} />
      ) : chooseMenuBtn === true ? (
        <ChooseMenu postId={postId} />
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Profile;
