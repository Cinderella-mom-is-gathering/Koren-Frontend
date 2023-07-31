import React from "react";

import styled from "styled-components";

const Crop = styled.img`
  margin-left: 20px;
  margin-top: 15px;
  width: 300px;
  height: 250px;

 object-fit: cover;
  object-position: initial;
  margin-right: 20px;

`


const ImgBox = () => {
    return (
        <div>
            <Crop src='postPIC.png'>
            </Crop>
        </div>
    )
}
export default ImgBox;