import {ButtonWrapper} from "./ButtonWrapper";
import styled from "styled-components";
import Img from "../../assets/back-arrow.png";

const BackArrowImg = styled.img`
  width:22px;
  height:22px;
`
const BackArrowButton = () => {
    return (
        <ButtonWrapper>
            <BackArrowImg src={Img}/>
        </ButtonWrapper>
    )
}

export default BackArrowButton;