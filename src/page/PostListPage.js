import React from "react";

import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";
import BottomNavigationBar from "../component/BottomNavigationBar";
import Header from "../component/header/Header";
import pic from "../assets/profilePIC.png"
const MainWrapper = styled.div`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const PostListPage = () => {
    return (
        <>

            <Header renderBackArrowButton={false} title='Memting'  renderWritingPostButton={true}/>

            <MainWrapper>
                <PostCard profilePIC={pic} approveBtn={false} coinValueBtn={false} chooseMenuBtn={true}/>
                <PostCard profilePIC={pic} approveBtn={false} coinValueBtn={false} chooseMenuBtn={true}/>
            </MainWrapper>
            <BottomNavigationBar/>
        </>

    )
}
export default PostListPage;