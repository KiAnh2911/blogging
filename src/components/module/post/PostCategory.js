import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.span`
  display: inline-block;
  a {
    display: block;
  }
  padding: 4px 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.gray6B};
  border-radius: 10px;
  white-space: nowrap;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.grayF3}; ;
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: #fff;
    `};
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
  }
`;
const PostCategory = ({
  children,
  className = "",
  type = "primary",
  to = "/",
}) => {
  return (
    <PostCategoryStyles className={className} type={type}>
      <NavLink to={to}>{children}</NavLink>
    </PostCategoryStyles>
  );
};

export default PostCategory;
