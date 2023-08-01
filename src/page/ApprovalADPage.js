import React from "react";
import { styled } from "styled-components";
import Profile from "../component/postCard/Profile";
import TextBox from "../component/postCard/TextBox";
import PostCard from "../component/postCard/PostCard";
import RejectButton from "../component/postCard/RejectButton";
import ApproveButton from "../component/postCard/ApproveButton";
import BottomNavigationBar from "../component/BottomNavigationBar";

const MainWrapper = styled.div`
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;
`;
const SubMainWrapper = styled.div`
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;
`;
const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #d5d5d5;
  border-radius: 5px;
`;

const ApprovalADPage = () => {
  return (
    <>
      <MainWrapper>
        <CardBox>
          <Profile nickname="Agust D" coinvaluebtn={false} />
          <TextBox />
          <SubMainWrapper>
            <PostCard coinvaluebtn={true} approvebtn={false} />
          </SubMainWrapper>
          <RejectButton />
          <ApproveButton />
        </CardBox>
      </MainWrapper>
      <BottomNavigationBar />
    </>
  );
};

export default ApprovalADPage;
