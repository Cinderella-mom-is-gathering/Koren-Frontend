import React from "react";
import profilePIC from "../../assets/profilePIC.png"
import styled from "styled-components";
import UserCoinValue from "./UserCoinValue";

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

const Profile = ({nickname,coinvaluebtn=true}) => {
    return (
        <div>

            <Img src={profilePIC}></Img>
            <NickName>
                {nickname}
            </NickName>
            <>
                {coinvaluebtn===true?<UserCoinValue value={0.001}/>:<></>}
            </>

        </div>

    )
}

export default Profile;