import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import PostListPage from "./page/PostListPage";
import PostDetailPage from "./page/PostDetailPage";
import AddPostPage from "./page/AddPostPage";
import PostNFTInfoPage from "./page/PostNFTInfoPage";
import RequestAdPage from "./page/RequestAdPage";
import ProfilePage from "./page/ProfilePage";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Wallet } from "./near-wallet";
import { Environment } from "./util/Environment";
import LoginPage from "./page/LoginPage";
import ApprovalADPage from "./page/ApprovalADPage";
const CONTRACT_ADDRESS = Environment.CONTRACT_ADDRESS;

const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

const isSignedIn = await wallet.startUp();

function App() {
  if (!isSignedIn) wallet.signIn();

  /* 로그인 안된 경우 호그인 페이지 출력 */
  if (!isSignedIn) {
    return <LoginPage />;
  } else {
    /*로그인 이후 나머지 화면 출력 */
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
          <Route path="/posts/add" element={<AddPostPage />} />
          <Route path="/posts/:postId/nft" element={<PostNFTInfoPage />} />
          <Route path="/advertisements/add" element={<RequestAdPage />} />
          <Route path="/profile" element={<ProfilePage wallet={wallet} />} />
          <Route path="/approval" element={<ApprovalADPage />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
