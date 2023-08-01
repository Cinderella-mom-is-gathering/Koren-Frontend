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
      // 현재 페이지의 URI에서 쿼리 파라미터와 해시 부분을 제외한 나머지 부분을 추출합니다.
      const currentURL = window.location.href;
      // const baseUrl = currentURL.split("?")[0].split("#")[0];

      console.log(currentURL.split("?")[0]);
      // console.log(currentURL.split("#")[1]);

      // // 변경할 URI의 경로 부분을 설정합니다.
      // const newPath = '/advertisements/complete';

      // 변경된 URI를 만들어 window.location.href를 변경합니다.
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
          <b>확인을 누르세여~</b>
        </h4>
      </MainWrapper>
      <SubmitButton content="확인" onClick={() => navigate("/posts")} />
    </div>
  );
};

export default CompleteRequestADPage;
