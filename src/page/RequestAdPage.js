import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";
import React from "react";
import Profile from "../component/postCard/Profile";
import TextBox from "../component/postCard/TextBox";
import ImgBox from "../component/postCard/ImgBox";
import RejectButton from "../component/postCard/RejectButton";
import ApproveButton from "../component/postCard/ApproveButton";
import BottomNavigationBar from "../component/BottomNavigationBar";
import Pic from "../assets/postPIC.png"
import Pic2 from "../assets/profilePIC.png"
import Header from "../component/header/Header";


const MainWrapper = styled.div`
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;
`
const SubMainWrapper = styled.div`
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;

`
const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #D5D5D5;
  border-radius: 5px;
`
const RequestAdPage = () => {
    return (
        <>
            <Header renderBackArrowButton={true} title="Memting"/>
            <MainWrapper>
                <CardBox>
                    <Profile nickname='MinSuga' approveBtn={false} coinValueBtn={false} profilePIC={Pic} />
                    <TextBox text={"Hello! My name is Agust D!" }></TextBox>
                    <SubMainWrapper>
                        <PostCard approveBtn={false} coinvaluebtn={true} approvebtn={false} profilePIC={Pic2}/>
                    </SubMainWrapper>
                    <RejectButton/>
                    <ApproveButton/>

                </CardBox>
            </MainWrapper>
            <BottomNavigationBar/>
        </>

    )
}

export default RequestAdPage;