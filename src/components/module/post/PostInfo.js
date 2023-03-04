import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostInfoStyles = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: inherit;
  gap: 12px;
  .post-dot {
    width: 6px;
    height: 6px;
    background-color: currentColor;
    display: inline-block;
    border-radius: 100rem;
  }
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
    gap: 6px;
    .post-dot {
      width: 4px;
      height: 4px;
    }
  }
`;

const PostInfo = ({
  date = "Mar 03",
  authorName = "Andiez Le",
  className = "",
  to = "/",
}) => {
  return (
    <PostInfoStyles className={className}>
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <NavLink to={to}>
        <span className="post-author">{authorName}</span>
      </NavLink>
    </PostInfoStyles>
  );
};

export default PostInfo;
