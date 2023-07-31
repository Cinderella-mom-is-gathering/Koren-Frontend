import styled from "styled-components";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import Header from "../component/header/Header";

const AddPostPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AddPostPage = () => {
  return (
    <AddPostPageWrapper>
      <Header renderBackArrowButton={true} title="포스트 작성" />
      <TextInput />
      <TextInputBottomBar />
    </AddPostPageWrapper>
  );
};

export default AddPostPage;
