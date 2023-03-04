import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostInfo from "./PostInfo";
import PostTitle from "./PostTitle";

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      display: block;
      width: 100%;
      height: 202px;
      border-radius: 12px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-image {
        aspect-ratio: 16/9;
        height: auto;
      }
    }
  }
`;
const PostItem = () => {
  return (
    <PostItemStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt=""
        to="/"
      ></PostImage>
      <div className="post-content">
        <PostCategory className="mb-4">Kiến thức</PostCategory>
        <PostTitle className="mb-[16px]" color="secondary">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo className="text-[#6B6B6B] !important"></PostInfo>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
