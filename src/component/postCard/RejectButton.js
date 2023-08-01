import React from "react";

import styled from "styled-components";


const Button = styled.button`

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
const RejectButton=()=>{
    return(
        <Button>거절</Button>

    )
}
export default RejectButton;