import styled from "styled-components";
import CommentSection from "../component/comment/CommentSection";

const MainWrapper = styled.div`
margin:20px;
  position: relative;
  
  display: flex;
  flex-direction:column;
`
const PostDetailPage=()=>{
    return(
        <div>
            PostDetailPage
            <CommentSection/>
        </div>
    )
}

export default PostDetailPage;