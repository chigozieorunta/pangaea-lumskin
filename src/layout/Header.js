import React from "react";
import Section from "./Section";
import PageBar from "../components/header/PageBar";
import TopNavigationBar from "../components/header/TopNavigationBar";

const Header = () => {
  return (
    <Section bgcolor="#f5f5f4">
      <TopNavigationBar />
      <PageBar />
    </Section>
  );
};

export default Header;
