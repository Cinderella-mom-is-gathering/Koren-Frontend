import ButtonWrapper from "./ButtonWrapper";
import styled from "styled-components";
import Img from "../../assets/back-arrow.png";
import {useNavigate} from "react-router-dom";
import logger from "../../util/Logger";

const BackArrowImg = styled.img`
  width:22px;
  height:22px;
`
const BackArrowButton = () => {

    const navigate = useNavigate();
    const backButtonHandler = () => {
        logger.debug("BackButton Clicked!");
        navigate(-1);
    }

    return (
        <ButtonWrapper onClick={backButtonHandler}>
            <BackArrowImg src={Img}/>
        </ButtonWrapper>
    )
}

export default BackArrowButton;