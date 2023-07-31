import styled from "styled-components";
import Img from "../../assets/write-post.png"
import ButtonWrapper from "./ButtonWrapper";
import {useNavigate} from "react-router-dom";
import logger from "../../util/Logger";

const WritingPostImg = styled.img`
  width:22px;
  height:22px;
`
const WritingPostButton = () => {

    const navigate = useNavigate();
    const onClickHandler = () => {
        logger.debug("GoWritingPostPage clicked!");
        navigate("/posts/add");
    }

    return (
        <ButtonWrapper onClick={onClickHandler}>
            <WritingPostImg src={Img}/>
        </ButtonWrapper>
    );
}

export default WritingPostButton;