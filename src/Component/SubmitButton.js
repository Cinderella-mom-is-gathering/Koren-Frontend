import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const Wrapper = styled.div`
  
`
const SubmitButton=({content})=> {
    return (
        <Wrapper>
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
                {content}
            </Button>

        </div>
        </Wrapper>
    );
}

export default SubmitButton;