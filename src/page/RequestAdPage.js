import React, { useEffect, useState } from "react";
import {
  AddTextInputPageWrapper,
  ImageWrapper,
  Img,
  NickName,
  ProfileHeader,
  SkeletonImage,
  TextBox,
} from "./AddPostPage";
import Header from "../component/header/Header";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../util/FirebaseInit";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { createAdRequest, getMyAccountId } from "../apis/ApiInterface";
import pic from "../assets/nonpic.png";
import ImgBox from "../component/postCard/ImgBox";

const CostInput = styled.input`
  /* width: 100%; */
  height: 30px;
  border: none;
  &:focus {
    outline: none;
  }
  padding: 20px 20px;
  margin: 0px 20px;
  border-radius: 5px;
  background-color: #fbfbfb;
  margin-bottom: 10px;
`;

const RequestAdPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [height, setHeight] = useState(0);
  const [cost, setCost] = useState("");
  const [contents, setContents] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [previewURLs, setPreviewURLs] = useState([]);

  const [userName, setUserName] = useState("");

  const uploadPhotos = async () => {
    let urls = [];
    for (let i = 0; i < imageFiles.length; i++) {
      const storageRef = ref(storage, imageFiles[i].name);
      await uploadBytes(storageRef, imageFiles[i]).then((snapshot) => {
        console.log(snapshot);
      });
      const url = await getDownloadURL(storageRef);
      urls.push(url);
    }

    return urls;
  };

  const uploadAdvertise = (urls) => {
    createAdRequest(params.postId, contents, urls, cost).then((result) => {
      console.log("업로드 완료");
    });
  };

  const onSubmit = async () => {
    const urls = await uploadPhotos();
    uploadAdvertise(urls);
  };

  useEffect(() => {
    const userId = getMyAccountId();
    setUserName(userId);
    const currentURL = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentURL.search);
    const transactionHashes = urlParams.get("transactionHashes");

    if (transactionHashes) {
      navigate("/advertisements/complete");
    }
  }, []);

  return (
    <AddTextInputPageWrapper>
      <Header renderBackArrowButton={true} title="일반 문의 작성" />
      <ProfileHeader>
        <Img src={pic} />

        <NickName>{userName?.split(".")[0]}</NickName>
      </ProfileHeader>
      <CostInput
        type="number"
        value={cost}
        onChange={(event) => setCost(event.target.value)}
        placeholder="금액을 입력해주세요."
      />
      <TextInput
        contents={contents}
        setContents={setContents}
        isOnFocus={false}
      />
      <ImageWrapper>
        {previewURLs.length === 0 ? (
          <SkeletonImage>
            <TextBox>사진을 추가해 주세요</TextBox>
          </SkeletonImage>
        ) : (
          <ImgBox url={previewURLs} />
        )}
      </ImageWrapper>
      <TextInputBottomBar
        height={height}
        setImageFile={setImageFiles}
        setPreviewURLs={setPreviewURLs}
        onSubmit={onSubmit}
      />
    </AddTextInputPageWrapper>
  );
};

export default RequestAdPage;
