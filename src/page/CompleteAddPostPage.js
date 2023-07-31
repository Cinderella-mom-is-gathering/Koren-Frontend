import React from 'react';
import styled from 'styled-components';
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

const CompleteAddPostPage = () => {
    return (
        <div>
            <MainWrapper>
            <h1><b>등록이 완료되었습니다!</b></h1>
            </MainWrapper>
            <MainWrapper>
            <h4><b>NFT정보</b></h4>
            </MainWrapper>
            <MainWrapper>
                <Profile nickname="Agust D" coinvaluebtn='false'/>
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
            <SubmitButton content="확인" />
        </div>
    );
};

export default CompleteAddPostPage;
