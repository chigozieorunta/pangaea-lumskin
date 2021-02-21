import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PageBar = () => {
  return (
    <Container style={styles.headerStyle} fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          <Row>
            <Col style={styles.colStyle}>
              <div>
                <h1 style={styles.pageTitleStyle}>All Products</h1>
                <span style={styles.pageExcerptStyle}>
                  A 360° look at Lumin
                </span>
              </div>
              <select style={styles.selectStyle}>
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

const styles = {
  pageExcerptStyle: { fontSize: "1rem" },

  pageTitleStyle: {
    fontFamily: "Freight Display",
    fontSize: "3rem",
    lineHeight: "1.125em",
  },

  headerStyle: {
    paddingTop: "6em",
    paddingBottom: "6em",
  },

  colStyle: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
  },

  selectStyle: {
    width: "50%",
    fontSize: "1rem",
    border: "1px solid #cdd1ce",
    borderRadius: 0,
    outline: 0,
    height: 50,
    padding: "0 1em",
  },
};

export default PageBar;
