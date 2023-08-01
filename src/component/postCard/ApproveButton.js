import React from "react";
import styled from "styled-components";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Api from "../../apis/ApiInterface";

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
`

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

const ApproveButton = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (<>
    <Button2 variant="primary" onClick={() => {
      Api.approveAdRequest(props.postId, props.requesterId)
      setModalShow(true)
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


export default ApproveButton;