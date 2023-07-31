import React from 'react';
import BottomNavigationBar from '../component/BottomNavigationBar';
import styled from 'styled-components';
import PostCard from '../component/postCard/PostCard';
import Profile from '../component/postCard/Profile';
import TextBox from '../component/postCard/TextBox';
import ImgBox from '../component/postCard/ImgBox';
import SubmitButton from '../component/SubmitButton';
import Header from "../component/header/Header";

const MainWrapper = styled.div`
  margin: 20px;
  position: relative;
  padding: 10px;

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

const TableRow = ({ label, value }) => (
    <tr>
        <LabelCell>{label}</LabelCell>
        <ValueCell>{value}</ValueCell>
    </tr>
);

const LoginPage = () => {
    return (
        <div>
            <Header
            title="내 정보"
            renderBackArrowButton={true}
            renderWritingPostButton={false}
            />

            <Profile nickname="Agust D" />
                <TextBox />
                <ImgBox />
                
            <MainWrapper>
                <Profile nickname="Agust D" />
                <TextBox />
                <ImgBox />
            </MainWrapper>
            <BottomNavigationBar />
        </div>
    );
};

export default LoginPage;