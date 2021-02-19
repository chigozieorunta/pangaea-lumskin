import React from "react";
import NavigationBar from "../components/header/NavigationBar";
import PageBar from "../components/header/PageBar";
import Section from "./Section";

const Header = () => {
  return (
    <Section bgcolor="#f5f5f4">
      <NavigationBar />
      <PageBar />
    </Section>
  );
};

export default Header;
