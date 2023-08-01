import {signIn} from "../util/WalletUtil";
import styled from "styled-components";

import LogoImg from "../assets/loginLogo.svg";


const LogoBox = styled.div`
  margin-top:230px;
  align-items: center;
  justify-content: center;
  display: inline-block;
`
const LoginButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 100%;
  height: 75px;
  background-color: cornflowerblue;
  color: white;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  padding: 15px;
`
const LoginText = styled.div`
  justify-content: center;
  align-items: center;
`


const LoginPage = () => {
    const loginButtonHandler = () => {
        signIn();
    };
    return (
        <>
            <LogoBox>
                <img src={LogoImg}></img>
            </LogoBox>
            <LoginButton onClick={loginButtonHandler}>
                <LoginText>Connect Your Wallet</LoginText>
            </LoginButton>
        </>
    );
};

export default LoginPage;
