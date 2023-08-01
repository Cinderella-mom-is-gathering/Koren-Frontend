import React from "react";

import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";
import BottomNavigationBar from "../component/BottomNavigationBar";
import Header from "../component/header/Header";
import pic from "../assets/profilePIC.png";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
const MainWrapper = styled.div`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const pics=[pic1,pic2,pic3];
const PostListPage = () => {
  return (
    <>
      <Header
        renderBackArrowButton={false}
        title="Memting"
        renderWritingPostButton={true}
      />

      <MainWrapper>
        <PostCard
          profilePIC={pic}
          url={pics}
          approveBtn={false}
          coinValueBtn={true}
          chooseMenuBtn={false}
        />
        <PostCard
          profilePIC={pic}
          url={pics}
          approveBtn={false}
          coinValueBtn={false}
          chooseMenuBtn={true}
        />
      </MainWrapper>
      <BottomNavigationBar />
    </>
  );
};
export default PostListPage;
