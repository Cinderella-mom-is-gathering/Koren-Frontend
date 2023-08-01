import React, { useEffect, useState } from "react";

import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";
import BottomNavigationBar from "../component/BottomNavigationBar";
import Header from "../component/header/Header";
import pic from "../assets/nonpic.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import userCoinValue from "../component/postCard/UserCoinValue";
import * as Api from "../apis/ApiInterface";
import { getPosts } from "../apis/ApiInterface";
import {useNavigate} from "react-router-dom";

const MainWrapper = styled.div`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const realName = (account) => account.split(".")[0];

const pics = [pic1, pic2, pic3];
const PostListPage = () => {

    const navigate = useNavigate();
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    Api.getFeed().then(setPosts);
  }, []);

  const goDetailPageHandler = (tokenId) => {
      navigate("/posts/"+tokenId);
  }
  return (
    <>
      <Header
        renderBackArrowButton={false}
        title="Memting"
        renderWritingPostButton={true}
      />

      <MainWrapper>
        {posts.map((e) => (
          <PostCard
            key={e.token_id}
            postId={e.token_id}
              onClickHandler={() => goDetailPageHandler(e.token_id)}
              profilePIC={pic}
            nickname={realName(e.owner_id)}
            text={e.metadata?.description}
            url={e.metadata?.img}
            approveBtn={false}
            coinValueBtn={false}
            chooseMenuBtn={true}
          />
        ))}
      </MainWrapper>
      <BottomNavigationBar />
    </>
  );
};
export default PostListPage;
