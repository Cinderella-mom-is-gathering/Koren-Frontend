import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import {CiMenuKebab} from "react-icons/ci";
import styled from "styled-components";
import {Link} from "react-router-dom";



const DropBtn=styled.button`
  background-color: white;
  color: white;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
const Dropdown=styled.div`
  position: relative;
  display: inline-block;
  margin-left:50%;
`
const DropdownContent=styled.div`

  position: absolute;
  left: -200%;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`
const A = styled.div`

  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
 
`

const ChooseMenu = () => {
    const [isClicked, setIsClicked] = useState(false);

    const Click = (event) => {
        setIsClicked(!isClicked);
    };

    return (

        <Dropdown>
            <DropBtn onClick={Click}><CiMenuKebab style={{"color":"grey"}}/></DropBtn>
            {isClicked?
            <DropdownContent>
                <Link to={"/advertisements/add"}><A>일반 문의</A></Link>
                <Link to={"/posts/:postId/nft"}><A>NFT 문의</A></Link>

            </DropdownContent>:<></>}
        </Dropdown>)
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