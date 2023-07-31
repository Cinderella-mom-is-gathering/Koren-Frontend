

import './App.css';


import PostListPage from "./page/PostListPage";
import PostDetailPage from "./page/PostDetailPage";
import AddPostPage from "./page/AddPostPage";
import PostNFTInfoPage from "./page/PostNFTInfoPage";
import LoginPage from "./page/LoginPage";
import RequestAdPage from "./page/RequestAdPage";

import { Routes, Route, HashRouter } from "react-router-dom";
// import { useState } from "react";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/add" element={<AddPostPage />} />
        <Route path="/posts/:postId/nft" element={<PostNFTInfoPage />} />
        <Route path="/advertisements/add" element={<RequestAdPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
