import React from "react";
import styled from "styled-components";
import { MdPhoto } from "react-icons/md";

const TextInputBottomBarWrapper = styled.div`
  position: fixed;
  bottom: ${(props) => props.height}px;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 20px;
  border-top: 1px solid #e5e5e5;
`;

const AddImageButton = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #5686e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddPostButton = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInputBottomBar = ({ height }) => {
  return (
    <TextInputBottomBarWrapper height={height}>
      <AddImageButton>
        <MdPhoto size={20} color={"#ffffff"} />
      </AddImageButton>
      <AddPostButton>
        <Text>{"등록"}</Text>
      </AddPostButton>
    </TextInputBottomBarWrapper>
  );
};
