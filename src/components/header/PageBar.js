import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const headerStyle = {
  paddingTop: "6em",
  paddingBottom: "6em",
};

const colStyle = {
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
};

const pageTitleStyle = {
  fontFamily: "Freight Display",
  fontSize: "3rem",
  lineHeight: "1.125em",
};

const pageExcerptStyle = { fontSize: "1rem" };

const PageBar = () => {
  return (
    <Container style={headerStyle} fluid>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <Row>
            <Col style={colStyle}>
              <div>
                <h1 style={pageTitleStyle}>All Products</h1>
                <span style={pageExcerptStyle}>A 360° look at Lumin</span>
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
        </Col>
      </Row>
    </Container>
  );
};

export default PageBar;
