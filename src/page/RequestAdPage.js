import React, { useState } from "react";
import { AddTextInputPageWrapper } from "./AddPostPage";
import Header from "../component/header/Header";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../util/FirebaseInit";
import { styled } from "styled-components";

const CostInput = styled.input`
  width: 100%;
  height: 30px;
  /* border: none; */
  padding: 10px;
  background-color: #fbfbfb;
`;

const RequestAdPage = () => {
  const [height, setHeight] = useState(0);
  const [cost, setCost] = useState(0);
  const [imageFile, setImageFile] = useState([]);

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

  // const onChange = (e) => {
  //   setCost(e.target.value);
  // };

  return (
    <AddTextInputPageWrapper>
      <Header renderBackArrowButton={true} title="포스트 작성" />
      <CostInput
        type="number"
        value={cost}
        onChange={(event) => setCost(event.target.value)}
      />
      <TextInput />
      <TextInputBottomBar
        height={height}
        setImageFile={setImageFile}
        onSubmit={onSubmit}
      />
    </AddTextInputPageWrapper>
  );
};

export default RequestAdPage;
