import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostInfo from "./PostInfo";
import PostTitle from "./PostTitle";

const PostNewestItemStyles = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      border-radius: 12px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    margin-bottom: 14px;
    padding-bottom: 14px;
    .post {
      &-image {
        width: 140px;
        height: 100px;
      }
    }
  }
`;

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt=""
        to="/"
      ></PostImage>
      <div className="post-content">
        <PostCategory type="secondary" className="mb-[10px]">
          Kiến thức
        </PostCategory>
        <PostTitle className="mb-[10px]">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo className="text-[#6B6B6B] !important"></PostInfo>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
