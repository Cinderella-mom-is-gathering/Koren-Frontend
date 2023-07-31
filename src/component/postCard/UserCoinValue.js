import React from "react";

import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";

const Button = styled.button`

  width: 120px;
  height: 40px;
  margin: 10px;
  margin-left: 20%;
  border-radius: 50px;
  color: black;
  font-size: 20px;
  border-color: black;
  letter-spacing: 2px;
  display: inline-block;
  background-color: white;

`

const Img = styled.img`
  width: 30px;
  height: 30px;
`

const UserCoinValue = ({value}) => {
    return (
        <Button>
            <Img src='coinlabel.png'/>
            {value}
        </Button>

    )
}
export default UserCoinValue;