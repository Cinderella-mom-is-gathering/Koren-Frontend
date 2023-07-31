import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`
const ItemLabel =({content})=>{
    return(
        <Wrapper>
            {content}
        </Wrapper>
)
}
export default ItemLabel;