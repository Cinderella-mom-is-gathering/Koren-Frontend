import React from "react";

import styled from "styled-components";

const Box=styled.div`
  margin-left: 20px;
  margin-top:15px;
  margin-right:20px;
`

const TextBox=({text})=>{
    return(
        <Box>
            {text}
            {/* Hello! My name is Agust D!<br/> */}
            {/* Something I don't like too much. If you like it too much, you can't do it for a long time. But I really liked it. */}
        </Box>

    )
}

export default TextBox;