import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../component/postCard/Profile";
import TextBox from "../component/postCard/TextBox";
import ImgBox from "../component/postCard/ImgBox";
import SubmitButton from "../component/SubmitButton";
import Header from "../component/header/Header";
import PIC from "../assets/profilePIC.png";
import { getLatestPostByUser, getMyAccountId } from "../apis/ApiInterface";

const MainWrapper = styled.div`
  margin: 20px;
  position: relative;
  padding: 10px;
  /* margin-bottom: 80px; */
  display: flex;
  flex-direction: column;
`;

const MainWrapperForBottom = styled.div`
  margin: 20px;
  position: relative;
  padding: 10px;
  margin-bottom: 80px;
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

const SpaceHeader = styled.div`
  height: 60px;
  width: 100%;
`;

const TableRow = ({ label, value }) => (
  <tr>
    <LabelCell>{label}</LabelCell>
    <ValueCell>{value}</ValueCell>
  </tr>
);

const CompleteAddPostPage = () => {
  const [postInfo, setPostInfo] = useState({});

  useEffect(() => {
    const userId = getMyAccountId();
    getLatestPostByUser(userId).then((result) => {
      console.log(result);
      setPostInfo(result[0]);
    });
  }, []);

  console.log(postInfo);

  return (
    <>
      {postInfo && (
        <div>
          <SpaceHeader />
          <MainWrapper>
            <h1>
              <b>등록이 완료되었습니다!</b>
            </h1>
          </MainWrapper>
          <MainWrapper>
            <h4>
              <b>NFT정보</b>
            </h4>
          </MainWrapper>
          <MainWrapper>
            <Profile
              profilePIC={PIC}
              nickname={postInfo.owner_id?.split(".")[0]}
              approveBtn={false}
              coinValueBtn={false}
              chooseMenuBtn={false}
            />
            <TextBox text={postInfo.metadata?.description} />
            <ImgBox url={postInfo.metadata?.media} />
          </MainWrapper>
          <div style={{ borderBottom: "1px solid #E9E9E9" }}></div>
          <MainWrapperForBottom>
            <TableWrapper>
              <Table>
                <tbody>
                  <TableRow
                    label="크리에이터"
                    value={postInfo.owner_id?.split(".")[0]}
                  />
                  <TableRow
                    label="컨트랙트 주소"
                    value={process.env.REACT_APP_CONTRACT_ADDRESS}
                  />
                  <TableRow label="토큰 ID" value={postInfo.token_id} />
                </tbody>
              </Table>
            </TableWrapper>
          </MainWrapperForBottom>
          <SubmitButton content="확인" />
        </div>
      )}
    </>
  );
};

export default CompleteAddPostPage;
