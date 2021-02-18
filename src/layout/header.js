import React, { Link } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../images/logo.png";
import Section from "./section";

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

const unOrderedList = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "15%",
};

const rightOrderedList = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "72.5%",
};

const Header = () => {
  return (
    <>
      <Section bgcolor="#f5f5f4">
        <Container
          style={{
            paddingTop: "6em",
            paddingBottom: "6em",
          }}
        >
          <Row>
            <Col style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h1
                  style={{
                    fontFamily: "Freight Display",
                    fontSize: "3rem",
                    lineHeight: "1.125em",
                  }}
                >
                  All Products
                </h1>
                <span style={{ fontSize: "1rem" }}>A 360° look at Lumin</span>
              </div>
              <select className="headerfilter">
                <option value="" disabled="">
                  Filter By
                </option>
                <option value="all-products">All Products</option>
                <option value="new-products">New Products</option>
                <option value="sets">Sets</option>
                <option value="skincare">Skincare</option>
                <option value="hair-and-body">Hair &amp; Body Care</option>
                <option value="accesories">Accesories</option>
              </select>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Header;
