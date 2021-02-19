import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

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

const NavigationBar = () => {
  return (
    <Container style={headerStyle} fluid>
      <Row>
        <Col style={colStyle}>
          <Logo />
          <NavigationLeft />
          <NavigationRight />
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
