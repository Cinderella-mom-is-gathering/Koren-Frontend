import React, { useEffect, useState } from "react";
import { AddTextInputPageWrapper } from "./AddPostPage";
import Header from "../component/header/Header";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../util/FirebaseInit";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { createAdRequest } from "../apis/ApiInterface";

const CostInput = styled.input`
  width: 100%;
  height: 30px;
  /* border: none; */
  padding: 10px;
  background-color: #fbfbfb;
`;

const RequestAdPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [height, setHeight] = useState(0);
  const [cost, setCost] = useState("");
  const [contents, setContents] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

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

  const uploadAdvertise = (urls) => {
    console.log("사진 업로드 완료", imageUrls);
    // createPost(contents, urls).then((result) => {
    //   console.log("업로드 완료");
    // });
    createAdRequest(params.postId, contents, urls, cost).then((result) => {
      console.log("업로드 완료");
    });
  };

  const onSubmit = async () => {
    console.log("firebase에 업로드");

    const urls = await uploadPhotos();
    uploadAdvertise(urls);
  };

  console.log(params.postId);

  useEffect(() => {
    const currentURL = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentURL.search);
    const transactionHashes = urlParams.get("transactionHashes");

    // console.log(transactionHashes);

    if (transactionHashes) {
      // 다른 페이지로 이동하는 코드
      navigate("/advertisements/complete");
    }
  }, []);

  return (
    <AddTextInputPageWrapper>
      <Header renderBackArrowButton={true} title="일반 문의 작성" />
      <CostInput
        type="number"
        value={cost}
        onChange={(event) => setCost(event.target.value)}
      />
      <TextInput
        contents={contents}
        setContents={setContents}
        isOnFocus={false}
      />
      <TextInputBottomBar
        height={height}
        setImageFile={setImageFiles}
        onSubmit={onSubmit}
      />
    </AddTextInputPageWrapper>
  );
};

export default RequestAdPage;
