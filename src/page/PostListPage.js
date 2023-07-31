import React from "react";

import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";

const MainWrapper = styled.div`
  margin: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const PostListPage = () => {
    return (
        <MainWrapper>
            <PostCard/>
        </MainWrapper>

    )
}
export default PostListPage;