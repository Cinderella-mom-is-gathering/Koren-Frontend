import React, { useEffect, useLayoutEffect } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px 20px;
  background-color: #fbfbfb;
  width: 100%;
  height: 500px;
  &:focus {
    outline: none;
  }
  border: none;
`;
export const TextInput = () => {
  const inputRef = React.useRef(null);

  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  return (
    <Form>
      <TextAreaWrapper>
        <TextArea maxLength={1000} ref={inputRef} />
      </TextAreaWrapper>
      {/*<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">*/}
      {/*    /!*<Form.Label>Example textarea</Form.Label>*!/*/}
      {/*    */}
      {/*</Form.Group>*/}
    </Form>
  );
};
