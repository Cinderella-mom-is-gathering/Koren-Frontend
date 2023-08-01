import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: cornflowerblue;
  color: white;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 5px;
`;
const SubmitButton = ({ content, onClick }) => {
  return (
    <form>
      <Button type="button" onClick={onClick}>
        {" "}
        {content}{" "}
      </Button>
    </form>
  );
};

export default SubmitButton;
