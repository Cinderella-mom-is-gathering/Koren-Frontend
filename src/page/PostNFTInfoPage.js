import React from 'react';
import BottomNavigationBar from '../component/BottomNavigationBar';
import styled from 'styled-components';
import PostCard from '../component/postCard/PostCard';
import Profile from '../component/postCard/Profile';
import TextBox from '../component/postCard/TextBox';
import ImgBox from '../component/postCard/ImgBox';
import SubmitButton from '../component/SubmitButton';

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

const PostNFTInfoPage = () => {
    return (
        <div>
            <MainWrapper>
                <Profile nickname="Agust D" />
                <TextBox />
                <ImgBox />
            </MainWrapper>
            <div style={{ borderBottom: '1px solid #E9E9E9' }}></div>
            <MainWrapper>
                <TableWrapper>
                    <Table>
                        <tbody>
                            <TableRow label="크리에이터" value="songsk" />
                            <TableRow label="컨트랙트 주소" value="348f64fbg23f3f3f" />
                            <TableRow label="토큰 ID" value="11" />
                        </tbody>
                    </Table>
                </TableWrapper>
            </MainWrapper>
            <div style={{ borderBottom: '1px solid #E9E9E9' }}></div>
            <MainWrapper>
                <TableWrapper>
                    <Table>
                        <tbody>
                            <TableRow label="가격" value="10.5 NEAR" />
                        </tbody>
                    </Table>
                </TableWrapper>
            </MainWrapper>
            <SubmitButton content="NFT 요청하기" />
        </div>
    );
};

export default PostNFTInfoPage;
