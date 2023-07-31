import styled from "styled-components";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";

const AddPostPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AddPostPage = () => {
  return (
    <AddPostPageWrapper>
      <TextInput />
      <TextInputBottomBar />
    </AddPostPageWrapper>
  );
};

export default AddPostPage;
