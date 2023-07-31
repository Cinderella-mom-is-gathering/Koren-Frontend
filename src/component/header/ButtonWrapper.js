import styled from "styled-components";

const Wrapper = styled.div`
  width:60px;
  height:60px;
  display:flex;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            {props.children}
        </Wrapper>
    );
}
export default ButtonWrapper;
