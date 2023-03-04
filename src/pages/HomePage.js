import React from "react";
import styled from "styled-components";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import HomeBanner from "components/module/home/HomeBanner";
import Layout from "components/layout/Layout";
import HomeFeature from "components/module/home/HomeFeature";
import HomeNewest from "components/module/home/HomeNewest";

const HomePageStyles = styled.div``;

const HomePage = () => {
  // const auth = getAuth();
  // signOut(auth)
  //   .then(() => {
  //     // Sign-out successful.
  //   })
  //   .catch((error) => {
  //     // An error happened.
  //   });
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
