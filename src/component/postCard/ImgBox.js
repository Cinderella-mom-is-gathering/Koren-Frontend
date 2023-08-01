import React from "react";

import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
const Crop = styled.img`
  margin-top: 15px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: initial;
  margin-right: 20px;
`;

const ImgBox = ({ url }) => {
  return (
    <div>
      {url &&
        (url.length === 1 ? (
          <Crop src={url} />
        ) : (
          <Carousel>
            {url.map((pic) => (
              <Carousel.Item interval={1000000000}>
                <Crop src={pic} />
              </Carousel.Item>
            ))}
          </Carousel>
        ))}
    </div>
  );
};
export default ImgBox;
