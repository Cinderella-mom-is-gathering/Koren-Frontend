import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

  margin-top:50px;
  font-size: 25px;
  font-weight: bold;
`
const Title=({content})=>{
    return(
        <Wrapper>
        {content}
</Wrapper>
    )
}

export default Title;