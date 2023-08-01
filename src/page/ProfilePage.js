import React, { useEffect, useState } from "react";
import BottomNavigationBar from "../component/BottomNavigationBar";
import styled from "styled-components";
import PostCard from "../component/postCard/PostCard";
import Profile from "../component/postCard/Profile";
import TextBox from "../component/postCard/TextBox";
import ImgBox from "../component/postCard/ImgBox";
import SubmitButton from "../component/SubmitButton";
import Header from "../component/header/Header";
import PostPIC from "../assets/background.png"; //이미지 불러오기
import profilePIC from "../assets/logopic.png";
import { Environment } from "../util/Environment";
import * as Api from "../apis/ApiInterface";

const MainWrapper = styled.div`
  position: relative;

  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`;

const Table = styled.table`
  width: 100%;
  td {
    padding: 5px;
  }
  /* table 요소에 패딩 추가 */
  padding: 10px;
`;

const LabelCell = styled.td`
  font-weight: bold;
  width: 40%;
`;

const ValueCell = styled.td`
  /* value 셀에 별도 스타일이 필요 없으므로 아무 스타일도 지정하지 않음 */
`;

const BackImg = styled.img`
  width: 100%;
  height: 200px;
  background-size: 50% 100%;

  object-fit: cover;
  object-position: initial;
  margin-right: 20px;
`;
const ProImg = styled.img`
  border-radius: 100px;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin-left: 20px;
  margin-right: 10px;
  position: absolute;
  top: 160px;
  left: 20px;
`;

const ProBox = styled.div`
  height: 240px;
`;

const ProBox2 = styled.div`
  margin-left: 40px;
  margin-right: 40px;

  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
`;

const ProBox3 = styled.div`
  margin-left: 0px;
  font-size: 15px;
`;

// console.log("아이디 : ", WalletUtil.getAccountId());

const TableRow = ({ label, value }) => (
  <tr>
    <LabelCell>{label}</LabelCell>
    <ValueCell>{value}</ValueCell>
  </tr>
);

const realName = (account) => account.split(".")[0];

const callPostCard = (e) => console.log(e);

const ProfilePage = () => {
  // const myName=realName(wallet.accountId);
  let [myNFTs, setMyNFTs] = useState([]);
  /**
  useEffect(()=>{
  wallet.viewMethod({contractId:CONTRACT_ADDRESS, method:"nft_tokens_for_owner",args:{account_id:"kkhmsg05.testnet"}})
  .then(setMyNFTs);}
  ,[]);
   */
  useEffect(() => {
    Api.getMyPosts().then(setMyNFTs);
  }, []);

  return (
    <div>
      <Header
        title="내 정보"
        renderBackArrowButton={true}
        renderWritingPostButton={false}
      />
      <MainWrapper>
        <ProBox>
          <BackImg src={PostPIC} />
          <ProImg src={profilePIC} />
        </ProBox>
        <ProBox2>
          <b>{realName(Api.getMyAccountId())}</b>
          <ProBox3>{"안녕하세요~" + realName(Api.getMyAccountId())+"입니다!!!"}</ProBox3>
        </ProBox2>
        <MainWrapper>
          {myNFTs.slice().reverse().map((e) => (
            <PostCard
              nickname={realName(e.owner_id)}
              text={e.metadata?.description}
              url={e.metadata?.img}
              approveBtn={false}
              coinvalueBtn={false}
              coinValue={(e.cost / 1e24).toFixed(2)}
            />
          ))}
          {/* {repeatedSections.map((index) => (
          <PostCard nickname={myName} text={index} approvebtn={false} coinvaluebtn={false} />
        ))} */}
        </MainWrapper>
      </MainWrapper>

      <BottomNavigationBar />
    </div>
  );
};

export default ProfilePage;
