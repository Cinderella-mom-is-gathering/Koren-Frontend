import styled from "styled-components";
import Img from "../../assets/write-post.png"
import {ButtonWrapper} from "./ButtonWrapper";

const WritingPostImg = styled.img`
  width:22px;
  height:22px;
`
const WritingPostButton = () => {

    return (
        <ButtonWrapper>
            <WritingPostImg src={Img}/>
        </ButtonWrapper>
    );
}

export default WritingPostButton;