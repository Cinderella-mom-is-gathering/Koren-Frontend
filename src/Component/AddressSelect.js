import Form from 'react-bootstrap/Form';
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  
`
function SelectBasicExample() {
    const addressData=["서울특별시","광주광역시","부산광역시"];
  return (
      <Wrapper>
    <Form.Select aria-label="Default select example">

        {addressData.map((si)=>(<option value={si}>{si} </option>))}

    </Form.Select>
      </Wrapper>
  );
}

export default SelectBasicExample;