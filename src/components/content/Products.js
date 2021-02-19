import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Col, Image } from "react-bootstrap";

const colStyle = { textAlign: "center", fontSize: 16, marginBottom: "6em" };

const productTitleStyle = { marginTop: 10, marginBottom: 20 };

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

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return `<p>${error}</p>`;
  return data.products.map(({ title, price, image_url }) => (
    <Col sm={6} md={4} style={colStyle}>
      <Image
        alt="Product Image"
        src={image_url}
        style={{ height: 120 }}
        fluid
      />
      <div style={productTitleStyle}>{title}</div>
      <div>
        From: NGN{" "}
        {price
          ? price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })
          : "0.00"}
      </div>
      <button style={buttonStyle}>Add To Cart</button>
    </Col>
  ));
};

export default Products;
