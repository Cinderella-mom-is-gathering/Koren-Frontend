import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai'; 
import { MdOutlinePersonOutline } from 'react-icons/md'; 

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
  return (
    <StyledFooter>
      <Button type='button'>
        <AiOutlineHome />
      </Button>
      <Button type='button'>
        <AiOutlineBell />
      </Button>
      <Button type='button'>
        <MdOutlinePersonOutline />
      </Button>
    </StyledFooter>
  );
};

export default BottomNavigationBar;
