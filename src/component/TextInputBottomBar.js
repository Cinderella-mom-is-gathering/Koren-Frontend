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

const AddImageButtonWapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #5686e3;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="file"] {
    position: absolute;
    width: 45px;
    height: 45px;
    opacity: 0;
    border-radius: 50%;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
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

export const TextInputBottomBar = ({ height, setImageFile, onSubmit }) => {
  const onChangeImage = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      console.log(event.target.files[i]);
    }
    // console.log(event.target.files);
    setImageFile(event.target.files);
  };

  return (
    <TextInputBottomBarWrapper height={height}>
      <AddImageButtonWapper>
        <input
          type="file"
          multiple="multiple"
          accept="image/*"
          onChange={onChangeImage}
          alt=""
        />
        <MdPhoto size={20} color={"#ffffff"} />
      </AddImageButtonWapper>

      {/* <MdPhoto size={20} color={"#ffffff"} /> */}
      {/* </input> */}
      <AddPostButton onClick={onSubmit}>{"등록"}</AddPostButton>
    </TextInputBottomBarWrapper>
  );
};
