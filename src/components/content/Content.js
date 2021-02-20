import React from "react";
import Section from "../../layout/Section";
import Products from "../../components/product/Products";
import { Container, Row, Col } from "react-bootstrap";

const Content = ({ onShowModal, onAddToCart }) => {
  return (
    <>
      <Section bgcolor="#e2e6e3">
        <Container style={styles.containerStyle} fluid>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <Row>
                <Products onShowModal={onShowModal} onAddToCart={onAddToCart} />
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

const styles = {
  containerStyle: { paddingTop: "4em", paddingBottom: "4em" },
};

export default Content;
