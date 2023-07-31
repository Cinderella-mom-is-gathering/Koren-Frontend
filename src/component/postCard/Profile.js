import React from "react";
import styled from "styled-components";
import UserCoinValue from "./UserCoinValue";
import {AiFillCheckCircle} from "react-icons/ai";
import ChooseMenu from "./ChooseMenu";
import Example from "../Test";

const Img = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 20px;
  margin-right: 10px;

`
const NickName = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-top: 4px;
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
`


const Profile = ({profilePIC,nickname, coinValueBtn = true, chooseMenuBtn=false}) => {
    return (
        <div>
            <Img src={profilePIC}></Img>

            <NickName>
                {nickname}
            </NickName>
            <>
                {coinValueBtn === true ? <UserCoinValue value={0.001}/> : <> {chooseMenuBtn === true? <ChooseMenu style={{"margin": "10px"}}/>:<></>}</>}
            </>
        </div>

    )
}

export default Profile;