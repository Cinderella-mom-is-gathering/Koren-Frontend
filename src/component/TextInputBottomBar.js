import React from "react";
import styled from "styled-components";

const TextInputBottomBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbfbfb;
`;

const AddImageButton = styled.div`
  width: 45px;
  height: 45px;
`;

export const TextInputBottomBar = () => {
  return (
    <TextInputBottomBarWrapper>
      <AddImageButton></AddImageButton>
    </TextInputBottomBarWrapper>
  );
};
