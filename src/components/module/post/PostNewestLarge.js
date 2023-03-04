import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostInfo from "./PostInfo";
import PostTitle from "./PostTitle";

const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      height: 433px;
      margin-bottom: 16px;
      border-radius: 16px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    &-image {
      height: 250px;
    }
  }
`;
const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt=""
        to="/"
      ></PostImage>
      <PostCategory className="mb-[10px]">Kiến thức</PostCategory>
      <PostTitle size="big" className="mb-[10px]">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostInfo className="text-[#6B6B6B] !important"></PostInfo>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
