import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopLeftNavigation from "./TopLeftNavigation";
import TopRightNavigation from "./TopRightNavigation";
import Logo from "./Logo";

const TopNavigationBar = ({ cart }) => {
  return (
    <Container style={styles.headerStyle} fluid>
      <Row>
        <Col style={styles.colStyle}>
          <Logo />
          <TopLeftNavigation />
          <TopRightNavigation cart={cart} />
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  headerStyle: {
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    boxShadow: "0 2px 3px -3px grey",
  },

  colStyle: {
    display: "flex",
    alignItems: "center",
    padding: "0",
    justifyContent: "space-between",
  },
};

export default TopNavigationBar;
