import styled from "styled-components";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import Header from "../component/header/Header";
import { useEffect, useState } from "react";

const AddPostPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AddPostPage = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (window) {
      let prevVisualViewport = window.visualViewport?.height;
      console.log(prevVisualViewport);
    }
  }, []);
  return (
    <AddPostPageWrapper>
      <Header renderBackArrowButton={true} title="포스트 작성" />
      <TextInput />
      <TextInputBottomBar height={height} />
    </AddPostPageWrapper>
  );
};

export default AddPostPage;
