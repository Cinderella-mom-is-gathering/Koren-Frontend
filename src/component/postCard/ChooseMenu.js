import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { CiMenuKebab } from "react-icons/ci";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const DropBtn = styled.button`
  background-color: white;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

`;
const DropdownContent = styled.div`
  position: absolute;
  left: -230%;
  bottom: -90px;

  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const A = styled.div`
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  text-underline: white;
  display: block;
`;

const ChooseMenu = ({ postId }) => {
  const navigation = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const Click = (event) => {
    setIsClicked(!isClicked);
  };

  const onNavToRequestAd = () => {
    navigation(`/advertisements/add/${postId}`);
  };

  const onNavToPostNFT = () => {
    navigation(`/posts/${postId}/nft`);
  };

  return (
    <Dropdown>
      <DropBtn onClick={Click}>
        <CiMenuKebab style={{ color: "grey" }} />
      </DropBtn>
      {isClicked ? (
        <DropdownContent>
          <div onClick={onNavToRequestAd}>
            <A>일반 문의</A>
          </div>
          <div onClick={onNavToPostNFT}>
            <A>NFT 문의</A>
          </div>
        </DropdownContent>
      ) : (
        <></>
      )}
    </Dropdown>
  );
};
export default ChooseMenu;

/*
const ChooseMenu = () => {

    return (
        <>
            <DropdownButton>
                <Dropdown.Item href="#/action-1">일반 문의</Dropdown.Item>
                <Dropdown.Item href="#/action-2">NFT 문의</Dropdown.Item>
            </DropdownButton>
    </>

);
}

export default ChooseMenu;*/
