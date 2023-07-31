import styled from "styled-components";
import BackArrow from "../../assets/back-arrow.png";
import BackArrowButton from "./BackArrowButton";
import {ButtonWrapper} from "./ButtonWrapper";
import WritingPostButton from "./WritingPostButton";
import RegistrationButton from "./RegistrationButton";

const TitleTab = styled.div`
  display: flex;
  justify-content: center;
  line-height: 60px;
  width: 270px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`
const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgray;
`
const Header = (props) => {


    const renderBackArrowButton = props.renderBackArrowButton;
    const renderWritingPostButton = props.renderWritingPostButton;
    const renderRegistrationButton = props.renderRegistrationButton;
    const title = props.title;

    const emptyTab = <ButtonWrapper/>;


    const leftTab = renderBackArrowButton ? <BackArrowButton/> : emptyTab;
    let rightTab;

    if (renderWritingPostButton) {
        rightTab = <WritingPostButton/>;
    } else if (renderRegistrationButton) {
        rightTab = <RegistrationButton/>
    }

    return (
        <HeaderWrapper>
            {leftTab}
            <TitleTab>
                <Title>
                    {title}
                </Title>
            </TitleTab>
            {rightTab}
        </HeaderWrapper>
    );
}

export default Header;