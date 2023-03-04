import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import slugify from "react-slugify";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostInfo from "./PostInfo";
import PostTitle from "./PostTitle";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  height: 169px;
  position: relative;
  .post {
    &-image {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: linear-gradient(
        179.77deg,
        #6b6b6b 36.45%,
        rgba(163, 163, 163, 0.622265) 63.98%,
        rgba(255, 255, 255, 0) 99.8%
      );
      min-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;
const PostFeatureItem = ({ data }) => {
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetch() {
      const docRef = doc(db, "categories", data.categoryId);
      const docSnap = await getDoc(docRef);
      setCategory(docSnap.data());
    }
    fetch();
  }, [data.categoryId]);

  useEffect(() => {
    async function fetchUser() {
      if (data.userID) {
        const docRef = doc(db, "users", data.userID);
        const docSnap = await getDoc(docRef);
        if (docSnap.data) {
          setUser(docSnap.data());
        }
        // console.log("fetch ~ docSnap:", docSnap.data());
      }
    }
    fetchUser();
  }, [data.userID]);
  if (!data || !data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <PostFeatureItemStyles>
      <PostImage url={data.image} alt={data.title}></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {category?.name && (
            <PostCategory to={category.slug}>{category.name}</PostCategory>
          )}
          <PostInfo
            to={slugify(user?.fullname || "", { lower: true })}
            authorName={user?.fullname}
            date={formatDate}
          ></PostInfo>
        </div>
        <PostTitle size="big">{data.title}</PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
