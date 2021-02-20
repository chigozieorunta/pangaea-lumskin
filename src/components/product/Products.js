import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Col, Image } from "react-bootstrap";

const colStyle = {
  textAlign: "center",
  fontSize: 16,
  marginBottom: "6em",
  position: "relative",
};

const productTitleStyle = {
  marginTop: 10,
  marginBottom: 20,
  position: "relative",
  display: "block",
};

const buttonStyle = {
  backgroundColor: "#4b5548",
  color: "#fff",
  border: "none",
  fontWeight: "300",
  fontSize: 14,
  padding: "1em",
  width: "50%",
  marginTop: 10,
};

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      image_url
      price(currency: NGN)
    }
  }
`;

const Products = ({ onAddToCart }) => {
  let { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return `<p>${error}</p>`;

  let updatedProducts = data.products.map((product, idx) => {
    return (product = Object.assign({ quantity: 1 }, product));
  });

  return updatedProducts
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((product, idx) => (
      <Col sm={6} md={4} style={colStyle}>
        <Image
          key={product.id}
          alt="Product Image"
          src={product.image_url}
          style={{ height: 120 }}
          fluid
        />
        <div style={productTitleStyle}>{product.title}</div>
        <div>
          From: NGN{" "}
          {product.price
            ? product.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })
            : "0.00"}
        </div>
        <button style={buttonStyle} onClick={() => onAddToCart(product)}>
          Add To Cart
        </button>
      </Col>
    ));
};

export default Products;
