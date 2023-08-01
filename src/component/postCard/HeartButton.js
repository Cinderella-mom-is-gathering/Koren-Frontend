import React, {useState} from "react";
import styled from "styled-components";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const HeartBtn=styled.button`
  border: 0;
  background-color: transparent;
  
  width: 20px;
`
const HeartNum=styled.div`
  margin-left:15px;
  font-size: 15px;
  display: inline-flex;
`
const HeartButton=({hearts})=>{
    const [Clicked, setClicked]=useState(false);
    const Click=(event)=>{
        setClicked(!Clicked);
    }
    return(
        <>
        <HeartBtn onClick={Click}>
            {Clicked?
                <AiFillHeart style={{"width":"25px","height":"25px"}}/>:
            <AiOutlineHeart style={{"width":"25px","height":"25px"}}/>
                }
        </HeartBtn>
        <HeartNum>
            {hearts}
        </HeartNum>
        </>
            );

}
export default HeartButton;