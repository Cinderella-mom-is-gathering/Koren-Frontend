import React from "react";

import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";
import ApproveButton from "./ApproveButton";
import RejectButton from "./RejectButton";
import PostPIC from "../../assets/postPIC.png";

import HeartButton from "./HeartButton";
import profilePic from "../../assets/nonpic.png"


const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #d5d5d5;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
`;

const PostCard = ({
  profilePIC=profilePic,
  nickname = "",
  text = "",
  url,
  approveBtn = true,
  coinValueBtn = true,
  chooseMenuBtn = false,
  postId,
    hearts=100,
    onClickHandler,
    coinValue=0,
    requesterId
}) => {

    return (
    <CardBox onClick={onClickHandler}>
      <Profile
        coinValue={coinValue}
        profilePIC={profilePIC}
        nickname={nickname}
        coinValueBtn={coinValueBtn}
        chooseMenuBtn={chooseMenuBtn}
        postId={postId}
        hearts={hearts}
      />
      <TextBox text={text} />
      <ImgBox url={url} />
      <>
        {approveBtn === true ? (
          <>
            <RejectButton postId={postId} requesterId={requesterId} />
            <ApproveButton postId={postId} requesterId={requesterId} />{" "}
          </>
        ) : (
          <div></div>
        )}

      </>
        <HeartButton hearts={hearts}/>
    </CardBox>
  );
};

export default PostCard;
