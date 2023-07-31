import React from "react";

import styled from "styled-components";

const Crop = styled.div`
  margin-left: 20px;
  margin-top: 15px;
  width: 300px;
  height: 200px;
  background-image: url("postPIC.png");
  background-position: top;
  background-size: 100%;
  margin-right: 20px;

`


const ImgBox = () => {
    return (
        <div>
            <Crop>

            </Crop>
        </div>
    )
}
export default ImgBox;