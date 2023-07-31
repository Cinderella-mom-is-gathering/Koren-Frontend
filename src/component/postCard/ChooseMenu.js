import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import {CiMenuKebab} from "react-icons/ci";
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Li=styled.li`
  ist-style-type: none;
  list-style: none;
`
const A=styled.a`
text-decoration:none;
  font-size:14px;
border-color: black;
`
const ChooseMenu = () => {

    return (
        <>
            <DropdownButton >
                <CiMenuKebab/>
                <Dropdown.Item href="#/action-1">일반 문의</Dropdown.Item>
                <Dropdown.Item href="#/action-2">NFT 문의</Dropdown.Item>
            </DropdownButton>
    </>

);
}

export default ChooseMenu;