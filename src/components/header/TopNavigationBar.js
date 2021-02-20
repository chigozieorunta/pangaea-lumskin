import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";
import TopLeftNavigation from "./TopLeftNavigation";
import TopRightNavigation from "./TopRightNavigation";

const headerStyle = {
  paddingTop: "0.5em",
  paddingBottom: "0.5em",
  boxShadow: "0 2px 3px -3px grey",
};

const colStyle = {
  display: "flex",
  alignItems: "center",
  padding: "0 2em",
};

const TopNavigationBar = () => {
  return (
    <Container style={headerStyle} fluid>
      <Row>
        <Col style={colStyle}>
          <Logo />
          <TopLeftNavigation />
          <TopRightNavigation />
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavigationBar;
