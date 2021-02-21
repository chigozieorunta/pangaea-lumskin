import React from "react";
import { Col, Image } from "react-bootstrap";
import { formatCost } from "../../utils/FormatCost";

const ProductItem = ({ id, title, price, image_url, product, onAddToCart }) => {
  return (
    <Col key={id} sm={6} md={4} style={styles.colStyle}>
      <Image
        alt="Product Image"
        src={image_url}
        style={{ height: 120 }}
        fluid
      />
      <div style={styles.productTitleStyle}>{title}</div>
      <div>From: NGN{formatCost(price)}</div>
      <button style={styles.buttonStyle} onClick={() => onAddToCart(product)}>
        Add To Cart
      </button>
    </Col>
  );
};

const styles = {
  colStyle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: "6em",
    position: "relative",
  },

  productTitleStyle: {
    marginTop: 10,
    marginBottom: 20,
    position: "relative",
    display: "block",
  },

  buttonStyle: {
    backgroundColor: "#4b5548",
    color: "#fff",
    border: "none",
    fontWeight: "300",
    fontSize: 14,
    padding: "1em",
    width: "50%",
    marginTop: 10,
  },
};

export default ProductItem;
