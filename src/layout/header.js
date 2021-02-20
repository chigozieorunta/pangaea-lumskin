import React from "react";
import TopNavigationBar from "../components/header/TopNavigationBar";
import PageBar from "../components/header/PageBar";
import Section from "./Section";

const Header = () => {
  return (
    <Section bgcolor="#f5f5f4">
      <TopNavigationBar />
      <PageBar />
    </Section>
  );
};

export default Header;
