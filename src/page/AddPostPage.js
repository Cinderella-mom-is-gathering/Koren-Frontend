import styled from "styled-components";
import { TextInput } from "../component/TextInput";
import { TextInputBottomBar } from "../component/TextInputBottomBar";
import Header from "../component/header/Header";
import { useEffect, useState } from "react";
import { storage } from "../util/FirebaseInit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createPost, getMyAccountId } from "../apis/ApiInterface";
import { useNavigate } from "react-router-dom";
import pic from "../assets/nonpic.png";
import ImgBox from "../component/postCard/ImgBox";

const Img = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;
const NickName = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-top: 4px;
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
`;
const ProfileHeader = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

export const AddTextInputPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  padding: 0px 20px;
  border-radius: 5px;
  height: 300px;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const AddPostPage = () => {
  const navigate = useNavigate();

  const [height, setHeight] = useState(0);
  const [userName, setUserName] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [previewURLs, setPreviewURLs] = useState([]);
  const [contents, setContents] = useState("");

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

  const uploadPost = (urls) => {
    createPost(contents, urls).then((result) => {
      console.log("업로드 완료");
    });
  };

  const onSubmit = async () => {
    const urls = await uploadPhotos();
    uploadPost(urls);
  };

  useEffect(() => {
    const userId = getMyAccountId();
    setUserName(userId);
    const currentURL = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentURL.search);
    const transactionHashes = urlParams.get("transactionHashes");

    console.log(transactionHashes);

    if (transactionHashes) {
      // 다른 페이지로 이동하는 코드
      navigate("/posts/complete");
    }
  }, []);

  return (
    <AddTextInputPageWrapper>
      <Header renderBackArrowButton={true} title="포스트 작성" />

      <ProfileHeader>
        <Img src={pic} />

        <NickName>{userName?.split(".")[0]}</NickName>
      </ProfileHeader>
      <TextInput
        contents={contents}
        setContents={setContents}
        isOnFocus={true}
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

export default AddPostPage;
