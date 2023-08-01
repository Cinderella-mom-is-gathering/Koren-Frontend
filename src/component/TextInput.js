import React, { useEffect, useLayoutEffect } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  flex: 1;
`;

const TextArea = styled.textarea`
  padding: 20px 20px;
  background-color: #fbfbfb;
  width: 100%;
  flex: 1;
  resize: none;
  &:focus {
    outline: none;
  }
  border: none;
  border-radius: 5px;
`;
export const TextInput = ({ contents, setContents, isOnFocus }) => {
  // const inputRef = React.useRef(null);

  // useLayoutEffect(() => {
  //   if (inputRef.current !== null && isOnFocus) inputRef.current.focus();
  // });

  return (
    <Form>
      <TextAreaWrapper>
        <TextArea
          maxLength={1000}
          // ref={inputRef}
          value={contents}
          rows={5}
          onChange={(event) => setContents(event.target.value)}
          placeholder="포스트 내용을 입력해 주세요."
        />
      </TextAreaWrapper>
      {/*<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">*/}
      {/*    /!*<Form.Label>Example textarea</Form.Label>*!/*/}
      {/*    */}
      {/*</Form.Group>*/}
    </Form>
  );
};
