import React from "react";

import styled from "styled-components";

const Crop = styled.img`
  margin-left: 20px;
  margin-top: 15px;
  width: 90%;
  height: 80%;

  object-fit: cover;
  object-position: initial;
  margin-right: 20px;

`


const ImgBox = ({url}) => {
    return (
        <div>
            <Crop src={url}>
            </Crop>
        </div>
    )
}
export default ImgBox;