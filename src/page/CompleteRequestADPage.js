import React, { useEffect } from "react";
import { MainWrapper, SpaceHeader } from "./CompleteAddPostPage";
import SubmitButton from "../component/SubmitButton";
import { useNavigate } from "react-router-dom";

const CompleteRequestADPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const currentURL = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentURL.search);
    const transactionHashes = urlParams.get("transactionHashes");

    console.log(transactionHashes);

    if (transactionHashes) {
      const currentURL = window.location.href;

      console.log(currentURL.split("?")[0]);
      const newURI = currentURL.split("?")[0] + "#" + currentURL.split("#")[1];
      window.location.href = newURI;
    }
  }, []);
  return (
    <div>
      <SpaceHeader />
      <MainWrapper>
        <h1>
          <b>문의가 접수되었습니다.</b>
        </h1>
      </MainWrapper>
      <MainWrapper>
        <h4>
          <b>확인을 눌러주세요.</b>
        </h4>
      </MainWrapper>
      <SubmitButton content="확인" onClick={() => navigate("/posts")} />
    </div>
  );
};

export default CompleteRequestADPage;
