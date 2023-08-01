import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Profile from "../component/postCard/Profile";
import TextBox from "../component/postCard/TextBox";
import PostCard from "../component/postCard/PostCard";
import RejectButton from "../component/postCard/RejectButton";
import ApproveButton from "../component/postCard/ApproveButton";
import BottomNavigationBar from "../component/BottomNavigationBar";
import Header from "../component/header/Header";
import * as Api from "../apis/ApiInterface";
import ImgBox from "../component/postCard/ImgBox";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MainWrapper = styled.div`
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;
`;
const SubMainWrapper = styled.div`
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;
`;
const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #d5d5d5;
  border-radius: 5px;
`;

const Button2 = styled.button`
  width: 95px;
  height: 40px;
  margin:10px;
  background-color: #5686E3;
  border-radius: 50px;
  color: white;
  font-size: 20px;
  border: none;
  letter-spacing: 2px;
`;


const realName = (account) => account.split(".")[0];

const ApprovalADPage = () => {
  let [requestedAD, setRequestedAD] = useState([]);

  useEffect(() => {
    Api.getMyAdRequest().then(setRequestedAD);
  }, [])



  const deleteHandler = (requestPostId) => {
  
    setRequestedAD(requestedAD.filter((e) => e.post_id !== requestPostId));
  };


 

  // console.log("광고 :", Api.getPostByToken(requestedAD[0].token_id).then(e=>console.log(e.metadata?.description)))

  return (
      <>
      <Header
        title="문의"
        renderBackArrowButton={true}
        renderWritingPostButton={false}
      />
      <MainWrapper></MainWrapper>
      {requestedAD.slice().reverse().map((e) => <Helper e={e} />)}
      <BottomNavigationBar />
        </>
  );
}

const Helper = ({ e }) => {
  const [nft, setNft] = useState({ metadata: { description: "", img: [] } });
  useEffect(() => { Api.getPostByToken(e.token_id).then(setNft) }, [])
  // Api.getPostByToken(e.token_id).then(setNft)
  // const [call, setCall] = useState(()=>{Api.approveAd(e.token_id, e.requester_id)});
  // useEffect(() => { setCall(()=>{Api.approveAd(e.token_id, e.requester_id)}) }, [e]);
  const call = ()=>Api.approveAd(e.token_id, e.requester_id)
  console.log(call)
  
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            승인완료
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{backgroundColor: "#5686E3"}}>닫기</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const ApproveButton = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
  
    const onClickHandler = () => {
      Api.approveAdRequest(props.postId,props.requesterId).then(() => {
            setModalShow(true);
      });
    }
  
    return (<>
      <Button2 variant="primary" onClick={()=>{
        call();
        setModalShow(true);
      }}>
        승인
      </Button2>
  
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    )
  }

  return (
  <>
  <MainWrapper>
    <CardBox>
      <Profile nickname={realName(e.requester_id)} coinValueBtn="false" />
      <TextBox text={e.description} />
      <ImgBox url={e.img} />
      <SubMainWrapper>
        <PostCard
          postId={e.token_id}
          coinValue={(e.cost / 1e24).toFixed(2)}
          nickname={realName(Api.getMyAccountId())}
          text={nft.metadata?.description}
          // text={(Api.getPostByToken(e.token_id)).matadata?.description}
          url={nft.metadata?.img}
          coinvaluebtn={true}
          approveBtn="false"
          requesterId={e.requester_id}
        />
      </SubMainWrapper>
      <RejectButton />
      <ApproveButton/>
    </CardBox>
  </MainWrapper>
  </>)
}

export default ApprovalADPage;