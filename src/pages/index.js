import React from "react";
import Layout from "../layout/layout";
import Section from "../layout/section";
import { Container, Row, Col, Image } from "react-bootstrap";
import Product1 from "../images/product1.png";
import Product2 from "../images/product2.png";
import Product3 from "../images/product3.png";
import Product4 from "../images/product4.png";
import Product5 from "../images/product5.png";
import Product6 from "../images/product6.png";
import Product7 from "../images/product7.png";
import Product8 from "../images/product8.png";
import Product9 from "../images/product9.png";

const buttonStyle = {
  backgroundColor: "#4b5548",
  color: "#fff",
  border: "none",
  fontWeight: "300",
  fontSize: 14,
  padding: "1em",
  width: "60%",
  marginTop: 10,
};

const containerStyle = { paddingTop: "4em", paddingBottom: "4em" };

const colStyle = { textAlign: "center", fontSize: 16, marginBottom: "6em" };

const productTitleStyle = { marginTop: 10, marginBottom: 20 };

const HomePage = () => {
  return (
    <>
      <Section bgcolor="#e2e6e3">
        <Layout>
          <Container style={containerStyle}>
            <Row>
              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product1}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product2}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product3}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product4}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product5}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product6}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product7}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product8}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>

              <Col sm={6} md={4} style={colStyle}>
                <Image
                  alt="Product Image"
                  src={Product9}
                  style={{ height: 170 }}
                  fluid
                />
                <div style={productTitleStyle}>Age Management Set</div>
                <div>From: NGN 20,000.00</div>
                <button style={buttonStyle}>Add To Cart</button>
              </Col>
            </Row>
          </Container>
        </Layout>
      </Section>
    </>
  );
};

export default HomePage;
