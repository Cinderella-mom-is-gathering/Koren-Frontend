import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import {useNavigate} from "react-router-dom";
import logger from "../util/Logger";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: cornflowerblue;
  
  `;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  height: 70px;
  background-color: cornflowerblue;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

const BottomNavigationBar = () => {

  const navigate = useNavigate();
  const HomeButtonHandler = () => {
    logger.debug("HomeButton Clicked!");
    navigate('/posts');
  };
  const BellButtonHandler = () => {
    logger.debug("BellButton Clicked!");
    navigate('/advertisements/add');
  };
  const PersonButtonHandler = () => {
    logger.debug("PersonButton Clicked!");
    navigate('/profile');
  };

  return (
    <StyledFooter>
      <Button onClick={HomeButtonHandler}>
        <AiOutlineHome />
      </Button>
      <Button onClick={BellButtonHandler}>
        <AiOutlineBell />
      </Button>
      <Button onClick={PersonButtonHandler}>
        <MdOutlinePersonOutline />
      </Button>
    </StyledFooter>
  );
};

export default BottomNavigationBar;
