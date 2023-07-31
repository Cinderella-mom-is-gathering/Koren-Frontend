import './App.css';


import PostListPage from "./page/PostListPage";
import PostDetailPage from "./page/PostDetailPage";
import AddPostPage from "./page/AddPostPage";
import PostNFTInfoPage from "./page/PostNFTInfoPage";
import RequestAdPage from "./page/RequestAdPage";
import ProfilePage from "./page/ProfilePage";
import { Routes, Route, HashRouter } from "react-router-dom";
// import { useState } from "react";
// import * as WalletUtil from "./util/WalletUtil";
import {Wallet} from "./near-wallet";
import {Environment} from "./util/Environment";
const CONTRACT_ADDRESS = Environment.CONTRACT_ADDRESS;


const wallet = new Wallet({createAccessKeyFor: CONTRACT_ADDRESS});

const isSignedIn = await wallet.startUp();
 function App() {
  if(!isSignedIn) wallet.signIn();


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PostListPage/>} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/add" element={<AddPostPage />} />
        <Route path="/posts/:postId/nft" element={<PostNFTInfoPage />} />
        <Route path="/advertisements/add" element={<RequestAdPage />} />
        <Route path="/profile" element={<ProfilePage wallet={wallet} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
