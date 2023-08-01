import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import PostListPage from "./page/PostListPage";
import PostDetailPage from "./page/PostDetailPage";
import AddPostPage from "./page/AddPostPage";
import PostNFTInfoPage from "./page/PostNFTInfoPage";
import RequestAdPage from "./page/RequestAdPage";
import ProfilePage from "./page/ProfilePage";
import { Routes, Route, HashRouter } from "react-router-dom";
// import { useState } from "react";
import * as WalletUtil from "./util/WalletUtil";
import { Wallet } from "./near-wallet";
import { Environment } from "./util/Environment";
import { useEffect, useState } from "react";
import LoginPage from "./page/LoginPage";
import ApprovalADPage from "./page/ApprovalADPage";
import CompleteAddPostPage from "./page/CompleteAddPostPage";
import CompleteRequestADPage from "./page/CompleteRequestADPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    WalletUtil.init().then((res) => {
      if (res) {
        // return <LoginPage />;
        setIsSignedIn(true);
      }

      // setIsLoading(false);
    });
  }, []);

  // if (isLoading) return <>Loading...</>;

  if (!isSignedIn) {
    return <LoginPage />;
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/add" element={<AddPostPage />} />
        <Route path="/posts/:postId/nft" element={<PostNFTInfoPage />} />
        <Route path="/advertisements/add/:postId" element={<RequestAdPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/approval" element={<ApprovalADPage />} />
        <Route path="/posts/complete" element={<CompleteAddPostPage />} />
        <Route
          path="/advertisements/complete"
          element={<CompleteRequestADPage />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
