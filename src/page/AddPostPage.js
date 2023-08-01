import styled from "styled-components";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import Header from "../component/header/Header";
import { useEffect, useState } from "react";
import { storage } from "../util/FirebaseInit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const AddTextInputPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AddPostPage = () => {
  const [height, setHeight] = useState(0);
  const [imageFile, setImageFile] = useState([]);
  const [contents, setContents] = useState("");

  const onSubmit = () => {
    console.log("firebase에 업로드");

    for (let i = 0; i < imageFile.length; i++) {
      const storageRef = ref(storage, imageFile[i].name);
      uploadBytes(storageRef, imageFile[i]).then((snapshot) => {
        console.log(snapshot);
        //   console.log("Uploaded a blob or file!");

        getDownloadURL(storageRef).then((url) => {
          console.log(url);
        });
      });
    }
  };

  useEffect(() => {
    if (window) {
      let prevVisualViewport = window.visualViewport?.height;
      console.log(prevVisualViewport);
    }
  }, []);
  return (
    <AddTextInputPageWrapper>
      <Header renderBackArrowButton={true} title="포스트 작성" />
      <TextInput contents={contents} setContents={setContents} />
      <TextInputBottomBar
        height={height}
        setImageFile={setImageFile}
        onSubmit={onSubmit}
      />
    </AddTextInputPageWrapper>
  );
};

export default AddPostPage;
