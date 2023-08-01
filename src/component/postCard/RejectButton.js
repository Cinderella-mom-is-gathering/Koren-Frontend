import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Api from '../../apis/ApiInterface';

const Button2 = styled.button`

  width: 95px;
  height: 40px;
  margin:10px;
  margin-left:20%;
  background-color: #C85858;
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
          거절완료
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor: "#5686E3"}}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
}


const RejectButton=(props)=>{
  const [modalShow, setModalShow] = React.useState(false);

  const onClickHandler = () => {
    Api.rejectAdRequest(props.postId,props.requesterId).then(() => {
      setModalShow(true);
    });
  }

  return (<>
    <Button2 variant="primary" onClick={onClickHandler}>
      거절
    </Button2>

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  )
}


export default RejectButton;