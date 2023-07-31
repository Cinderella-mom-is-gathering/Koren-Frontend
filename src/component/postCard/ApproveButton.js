import React from "react";

import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";

const Button = styled.button`

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

const ApproveButton=()=>{
    return(
        <Button>승인</Button>
    )
}


export default ApproveButton;