import styled from "styled-components";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import Header from "../component/header/Header";
import { useEffect, useState } from "react";
import { storage } from "../util/FirebaseInit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import * as api from "../api/api";
import { createPost } from "../apis/ApiInterface";

export const AddTextInputPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AddPostPage = () => {
  const [height, setHeight] = useState(0);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); // [url1, url2, url3
  const [contents, setContents] = useState("");

  const uploadPhotos = async () => {
    let urls = [];
    for (let i = 0; i < imageFiles.length; i++) {
      const storageRef = ref(storage, imageFiles[i].name);
      await uploadBytes(storageRef, imageFiles[i]).then((snapshot) => {
        console.log(snapshot);
      });
      console.log("업로드 완료");
      const url = await getDownloadURL(storageRef);
      console.log("uri get!");
      // setImageUrls((prev) => prev.concat([url]));
      urls.push(url);
    }
    console.log("사진 업로드 완료", imageUrls, urls);

    return urls;
  };

  const uploadPost = (urls) => {
    console.log("사진 업로드 완료", imageUrls);
    createPost(contents, urls).then((result) => {
      console.log("업로드 완료");
    });
  };

  const onSubmit = async () => {
    console.log("firebase에 업로드");

    const urls = await uploadPhotos();
    uploadPost(urls);
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
        setImageFile={setImageFiles}
        onSubmit={onSubmit}
      />
    </AddTextInputPageWrapper>
  );
};

export default AddPostPage;
