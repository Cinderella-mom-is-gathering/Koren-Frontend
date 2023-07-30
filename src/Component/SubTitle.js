import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  
  font-size: 15px;
  margin-bottom: 35px;
`

const SubTitle=({content})=>{
    return(
        <Wrapper>
            {content}
        </Wrapper>
    )
}
export default SubTitle;